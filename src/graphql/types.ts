export type ChannelIdsType = 'general' | 'technology' | 'lgtm';
export type ResourceType = 'users' | 'channels' | 'messages';

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

export type Flatten<T> = T extends unknown[] ? T[number] : T;
