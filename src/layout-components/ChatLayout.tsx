import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  background-color: ${(p) => p.theme.colors.surface};
  .sidebar {
    flex-basis: 370px;
    flex-shrink: 0;
    border-right: 0.5px solid ${(p) => p.theme.colors.divider};
  }
  .chat-window {
    flex: 1;
    border-left: 0.5px solid ${(p) => p.theme.colors.divider};
  }
`;
const ChatLayout: FC<{
  sidebarComponent: ReactNode;
  chatWindowComponent: ReactNode;
}> = (props) => {
  const { sidebarComponent, chatWindowComponent } = props;
  return (
    <StyledMain>
      <div className="sidebar">{sidebarComponent}</div>
      <div className="chat-window">{chatWindowComponent}</div>
    </StyledMain>
  );
};

export default ChatLayout;
