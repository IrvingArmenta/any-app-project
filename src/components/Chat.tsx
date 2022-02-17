import React, { lazy, Suspense, useCallback } from 'react';
import { ChannelType, UserType } from '../graphql/types';
import useSetState from '../hooks/useSetState';
import ChatLayout from '../layout-components/ChatLayout';
const ChatWindow = lazy(() => import('./ChatWindow'));
const Sidebar = lazy(() => import('./Sidebar'));

export type ChatStateType = {
  currentUser: UserType;
  currentChannel: ChannelType;
};

const Chat = () => {
  // perhaps will get current data from server
  // right now is just static
  const [chatState, setChatState] = useSetState<ChatStateType>({
    currentChannel: { id: 'general', name: 'General Channel' },
    currentUser: { id: '1', name: 'Joyse' }
  });

  const getCurrentUser = useCallback((currentUser: UserType) => {
    setChatState({ currentUser });
  }, []);

  const getCurrentChannel = useCallback((currentChannel: ChannelType) => {
    setChatState({ currentChannel });
  }, []);

  return (
    <>
      {JSON.stringify(chatState, null, 2)}
      <ChatLayout
        sidebarComponent={
          <Suspense fallback={<p>loading...</p>}>
            <Sidebar
              currentChannel={chatState.currentChannel}
              getCurrentUser={getCurrentUser}
              getCurrentChannel={getCurrentChannel}
            />
          </Suspense>
        }
        chatWindowComponent={
          <Suspense fallback={<p>loading...</p>}>
            <ChatWindow chatState={chatState} />
          </Suspense>
        }
      />
    </>
  );
};

export default Chat;
