export type ChannelIdsType = 'general' | 'technology' | 'lgtm';
export type ResourceType = 'users' | 'channels' | 'messages';

// resouces typing
export type UserType = {
  id: string;
  name: string;
};

export type ChannelType = {
  id: ChannelIdsType;
  name: string;
};

export type MessagesType = {
  id: string;
  channel_id: ChannelIdsType;
  user_id: string;
  content: string;
};

// return types
export interface ApiAllReturnTypes {
  users: { allUsers: UserType[] };
  channels: { allChannels: ChannelType[] };
  messages: { allMessages: MessagesType[] };
}
export interface ApiByIdReturnTypes {
  users: { User: UserType };
  channels: { Channel: ChannelType };
  messages: { Message: MessagesType };
}
