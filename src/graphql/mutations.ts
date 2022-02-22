import { gql } from 'graphql-request';
import { graphClient } from '.';
import { dataProps } from './queries';
import {
  ApiCreateMapping,
  ApiFilteringMapping,
  MessagesType,
  ResourceType
} from './types';

async function useCreateMessage(body: Omit<MessagesType, 'id'>) {
  const { user_id, content, channel_id, date } = body;

  const mutate = gql`
    mutation {
        createMessage(user_id: "${user_id}", content: "${content}", channel_id: "${channel_id}", date: "${new Date(
    date
  ).toISOString()}") {
            ${dataProps.messages}
        }
    }`;

  const req = await graphClient.request<MessagesType>(mutate);

  if (req) {
    return { message: req, sent: true };
  } else {
    return { error: true };
  }
}

export default useCreateMessage;
