import React, { FC } from 'react';
import styled from 'styled-components';
import { TextArea } from '../../global-components';
import { useRequestFilterBy } from '../../graphql';
import type { ChatStateType } from '../Chat';

const StyledMessagesContainer = styled.div``;

const MessagesContainer: FC<{ chatState: ChatStateType }> = (props) => {
  const { chatState } = props;
  const { currentChannel } = chatState;

  // filtering request by channel id
  const { data: channelMessages } = useRequestFilterBy(
    'messages',
    'channel_id',
    currentChannel.id
  );

  return (
    <StyledMessagesContainer>
      {JSON.stringify(channelMessages?.allMessages, null, 2)}
      <div className="textarea-wrap">
        <TextArea />
      </div>
    </StyledMessagesContainer>
  );
};

export default MessagesContainer;
