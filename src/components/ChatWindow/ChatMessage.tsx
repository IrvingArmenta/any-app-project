import React, { FC } from 'react';
import styled from 'styled-components';
import { ChannelType, UserType } from '../../graphql/types';

type ChatMessagePropsType = {
  senderId: UserType['id'];
  content: string;
  currentUser: UserType;
  currentChannel: ChannelType;
};

const StyledChatMessage = styled.article``;

const ChatMessage: FC<ChatMessagePropsType> = (props) => {
  const { currentUser } = props;
  return <StyledChatMessage>chat message</StyledChatMessage>;
};

export default ChatMessage;
