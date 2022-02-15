import { GraphQLClient, request } from 'graphql-request';
import { getAllQuery, getById } from './queries';
import {
  ChannelType,
  Flatten,
  MessagesType,
  ResourceType,
  UserType,
} from './types';
import useSWR from 'swr';
const serverEndpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/graphql'
    : 'http://some-fancy-graphql-endpoint.com/graphql';

type ApiReturnTypes = {
  users: { allUsers: UserType[] };
  channels: { allChannels: ChannelType[] };
  messages: { allMessages: MessagesType[] };
};

type ReturnObjectKeyType = {
  users: 'allUsers';
  channels: 'allChannels';
  messages: 'allMessages';
};

const graphClient = new GraphQLClient(serverEndpoint);

// CORS
if (process.env.NODE_ENV === 'development') {
  graphClient.setHeader('Access-Control-Allow-Origin', '*');
  graphClient.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
}

export const useRequestAll = <T extends ResourceType>(resourceType: T) => {
  const fetcher = (query: string) =>
    graphClient.request<ApiReturnTypes[T]>(query);

  const swr = useSWR(getAllQuery(resourceType), fetcher);

  return swr;
};

export const useRequestById = <T extends keyof ApiReturnTypes>(
  resourceType: T,
  id: string
) => {
  const fetcher = (query: string) =>
    graphClient.request<{ data: Flatten<ApiReturnTypes[T]> }>(query);

  const swr = useSWR(getById(resourceType, id), fetcher);

  return swr;
};
