import React, { FC } from 'react';
import styled from 'styled-components';
import { ChannelType, MessagesType, UserType } from '../../graphql/types';

export type ChatMessagePropsType = {
  message: MessagesType;
  userName?: string;
  currentUser: UserType;
  currentChannel: ChannelType;
  sent?: boolean;
  error?: boolean;
};

const StyledChatMessage = styled.li<{ isCurrentUser: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.isCurrentUser ? 'flex-end' : 'flex-start')};
  .chat-message {
    max-width: 60%;
    display: flex;
    align-items: flex-start;
    flex-direction: ${(p) => (p.isCurrentUser ? 'row' : 'row-reverse')};

    &__message-wrap {
      display: flex;
      align-items: center;
    }

    &__message {
      padding: 0.4rem 1rem;
      background-color: ${(p) => p.theme.colors.neutral.light};
      position: relative;
      margin-left: 4px;
      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 10px;
        border: 10px solid;
        ${(p) =>
          !p.isCurrentUser
            ? `left: -20px;
        border-color: transparent #ffffff transparent transparent;`
            : ` right: -20px; border-color: transparent transparent transparent #ffffff; left: inherit;
        `}
      }
    }
    &__avatar {
      text-align: center;
      margin-left: ${(p) => (p.isCurrentUser ? '20px' : '0')};
      margin-right: ${(p) => (p.isCurrentUser ? '0' : '20px')};
      p {
        color: #999999;
        font-size: 0.75rem;
      }
      .img-wrap {
        width: 48px;
        height: 48px;
        display: block;
      }
    }
  }
`;

const ChatMessage: FC<ChatMessagePropsType> = (props) => {
  const { currentUser, message, userName, error, sent } = props;
  const isCurrentUser = currentUser.id === message.user_id;
  return (
    <StyledChatMessage isCurrentUser={isCurrentUser}>
      <article className="chat-message">
        <div className="chat-message__message-wrap">
          {isCurrentUser ? (
            <div className="chat-message__status">
              {sent && <span>sent</span>}
              {error && <span>error</span>}
            </div>
          ) : null}
          <div className="chat-message__message">{message.content}</div>
        </div>
        <div className="chat-message__avatar">
          <span className="img-wrap">
            <img
              loading="lazy"
              src={`img/${userName}.png`}
              alt={`${userName}'s avatar`}
            />
          </span>
          <p>{userName}</p>
        </div>
      </article>
    </StyledChatMessage>
  );
};

export default ChatMessage;
