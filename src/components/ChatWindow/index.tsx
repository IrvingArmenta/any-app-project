import React, { FC } from 'react';
import { ChatStateType } from '../Chat';
import MessagesContainer from './MessagesContainer';
import { StyledChatWindow } from './styles';

const ChatWindow: FC<{ chatState: ChatStateType }> = (props) => {
  const { chatState } = props;
  return (
    <StyledChatWindow>
      <header>
        <h3>{chatState.currentChannel.name}</h3>
      </header>
      <MessagesContainer chatState={chatState} />
    </StyledChatWindow>
  );
};

export default ChatWindow;
