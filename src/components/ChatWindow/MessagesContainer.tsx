import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import styled from 'styled-components';
import { Button, TextArea } from '../../global-components';
import { useRequestFilterBy } from '../../graphql';
import useCreateMessage from '../../graphql/mutations';
import { MessagesType, UserType } from '../../graphql/types';
import useSetState from '../../hooks/useSetState';
import type { ChatStateType } from '../Chat';
import ChatMessage from './ChatMessage';

const StyledMessagesContainer = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  .messages-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: 542px; // not exact;
    > * + * {
      margin-top: 16px;
    }
  }
  .textarea-wrap {
    text-align: right;
    margin-top: 16px;
    flex-shrink: 0;
    button {
      margin-top: 8px;
    }
  }
`;

type FEMessage = {
  error?: boolean;
  sent?: boolean;
} & MessagesType;

const MessagesContainer: FC<{
  chatState: ChatStateType;
  usersList: UserType[];
}> = (props) => {
  const { chatState, usersList } = props;
  const messagesWrapRef = useRef<HTMLUListElement>(null);
  const [textareaValue, setTextAreaValue] = useState<string>();
  const [chatMessagesCopy, setChatMessagesCopy] = useSetState<{
    messages: FEMessage[];
  }>({ messages: [] });
  const { currentChannel, currentUser } = chatState;

  // filtering request by channel id
  const { data: channelMessages, mutate } = useRequestFilterBy(
    'messages',
    'channel_id',
    currentChannel.id
  );

  useEffect(() => {
    if (channelMessages) {
      const mappedCopy: FEMessage[] = [...channelMessages.allMessages].map(
        (message) => {
          return {
            ...message,
            error: false,
            sent: true
          };
        }
      );

      setChatMessagesCopy({ messages: [...mappedCopy] });
    }
  }, [channelMessages?.allMessages]);

  useLayoutEffect(() => {
    if (channelMessages) {
      if (channelMessages.allMessages.length && messagesWrapRef.current) {
        console.log(
          messagesWrapRef.current,
          channelMessages.allMessages.length
        );
        const h = messagesWrapRef.current.scrollHeight;
        console.log(h, channelMessages.allMessages.length);
        setTimeout(() => {
          if (messagesWrapRef.current) {
            messagesWrapRef.current.scrollTop = h || 0;
          }
        }, 1);
      }
    }
  }, [channelMessages?.allMessages]);

  const handleTextAreaOnChange = useCallback((value: string) => {
    setTextAreaValue(value);
  }, []);

  const submitMessage = async () => {
    if (textareaValue && textareaValue.replace(/\s/g, '').length !== 0) {
      const messageData = {
        user_id: currentUser.id,
        channel_id: currentChannel.id,
        content: textareaValue.trim(),
        date: new Date().toISOString()
      };

      setTextAreaValue('');

      const msg = await useCreateMessage({ ...messageData });

      if (msg.error) {
        chatMessagesCopy.messages.push({
          ...messageData,
          id: 'errorMsg',
          error: true
        });
        return;
      }

      mutate();
    }
  };

  return (
    <StyledMessagesContainer>
      <ul className="messages-wrap" ref={messagesWrapRef}>
        {chatMessagesCopy.messages.map((message) => (
          <ChatMessage
            error={message.error}
            sent={message.sent}
            key={message.id}
            message={message}
            currentChannel={currentChannel}
            currentUser={currentUser}
            userName={
              usersList.find((user) => user.id === message.user_id)?.name
            }
          />
        ))}
      </ul>
      <div className="textarea-wrap">
        {textareaValue}
        <TextArea
          value={textareaValue}
          onChange={handleTextAreaOnChange}
          placeholder="Type your message here..."
        />
        <Button onClick={() => submitMessage()} iconName="paperplane">
          Send Message
        </Button>
      </div>
    </StyledMessagesContainer>
  );
};

export default MessagesContainer;
