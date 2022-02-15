import { gql } from 'graphql-request';
import { ResourceType } from './types';

const dataProps: Record<ResourceType, string> = {
  users: `id
        name`,
  messages: `id
    content
    user_id
    channel_id`,
  channels: `id, 
    name`,
};

export const getAllQuery = (dataType: ResourceType) => {
  return gql`
    {
      all${dataType.charAt(0).toUpperCase() + dataType.slice(1)} {
        ${dataProps[dataType]}
      }
    }
  `;
};

export const getById = (dataType: ResourceType, id: string) => {
  const resourceName = `${
    dataType.charAt(0).toUpperCase() + dataType.slice(1)
  }`;

  return gql`
      {
        ${resourceName.slice(0, -1)}(id: "${id}") {
          ${dataProps[dataType]}
        }
      }
    `;
};
