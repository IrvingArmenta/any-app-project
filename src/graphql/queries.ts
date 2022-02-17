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
    name`
};

export const getAllQuery = (resourceType: ResourceType) => {
  const resourceName =
    resourceType.charAt(0).toUpperCase() + resourceType.slice(1);

  return gql`
    {
      all${resourceName} {
        ${dataProps[resourceType]}
      }
    }
  `;
};

export const getByIdQuery = (resourceType: ResourceType, id: string) => {
  const resourceName = `${
    resourceType.charAt(0).toUpperCase() + resourceType.slice(1)
  }`.slice(0, -1);

  return gql`
      {
        ${resourceName}(id: "${id}") {
          ${dataProps[resourceType]}
        }
      }
    `;
};
