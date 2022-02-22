import React, { FC } from 'react';
import { UserType } from '../../graphql/types';
import { ChatStateType } from '../Chat';
import MessagesContainer from './MessagesContainer';
import { StyledChatWindow } from './styles';

const ChatWindow: FC<{ chatState: ChatStateType; usersList: UserType[] }> = (
  props
) => {
  const { chatState, usersList } = props;
  return (
    <StyledChatWindow>
      <header>
        <h3>{chatState.currentChannel.name}</h3>
      </header>
      <MessagesContainer chatState={chatState} usersList={usersList} />
    </StyledChatWindow>
  );
};

export default ChatWindow;
