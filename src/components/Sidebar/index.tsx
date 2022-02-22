import React, { FC, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Select } from '../../global-components';
import ErrorBoundary from '../../global-components/ErrorBoundary';
import { useRequestAll } from '../../graphql';
import { ChannelType, UserType } from '../../graphql/types';
import ChannelSelectButton from './ChannelSelectButton';

const StyledSidebar = styled.section`
  padding: 16px;
  > * + * {
    margin-top: 1rem;
  }
  .channel-selection {
    h4 {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 8px;
    }
    &__buttons-wrap {
      margin: 0 -16px;
    }
  }
`;

const Sidebar: FC<{
  currentChannel: ChannelType;
  getCurrentUser: (user: UserType) => void;
  getCurrentChannel: (channel: ChannelType) => void;
  getAllUsers: (users: UserType[]) => void;
}> = (props) => {
  const { getCurrentUser, currentChannel, getCurrentChannel, getAllUsers } =
    props;

  // api
  const { data: users, error } = useRequestAll('users');
  const { data: channels } = useRequestAll('channels');

  const handleSelectOnChange = useCallback(
    (userId: string) => {
      if (users) {
        const currentUser = users.allUsers.find((user) => userId === user.id);
        if (currentUser) {
          getCurrentUser(currentUser);
        }
      }
    },
    [users]
  );

  const mappedUsers = useMemo(() => {
    if (users) {
      return users?.allUsers.map((user) => ({
        text: user.name,
        id: user.id,
        value: user.id
      }));
    }

    return [];
  }, [users?.allUsers]);

  useEffect(() => {
    if (users) {
      getAllUsers(users.allUsers);
    }
  }, [users]);

  const handleChannelSelection = (channel: ChannelType) => {
    getCurrentChannel(channel);
  };

  return (
    <ErrorBoundary>
      <StyledSidebar>
        <Select
          label="1. Choose your user"
          options={mappedUsers}
          id="currentUserSelect"
          onChange={(userId) => handleSelectOnChange(userId)}
        />
        {JSON.stringify(error, null, 2)}
        <nav className="channel-selection">
          <h4>2. Choose your Channel</h4>
          <div className="channel-selection__buttons-wrap">
            {channels
              ? channels.allChannels.map((channel) => {
                  return (
                    <ChannelSelectButton
                      active={channel.id === currentChannel.id}
                      key={channel.id}
                      onClick={() => handleChannelSelection(channel)}
                    >
                      {channel.name}
                    </ChannelSelectButton>
                  );
                })
              : null}
          </div>
        </nav>
      </StyledSidebar>
    </ErrorBoundary>
  );
};

export default Sidebar;
