import React, { FC } from 'react';
import { ChatStateType } from '../Chat';
import { StyledChatWindow } from './styles';

const ChatWindow: FC<{ chatState: ChatStateType }> = (props) => {
  const { chatState } = props;
  return (
    <StyledChatWindow>
      <header>{chatState.currentChannel.name}</header>
    </StyledChatWindow>
  );
};

export default ChatWindow;
