import { GraphQLClient } from 'graphql-request';
import { getAllQuery, getByIdQuery } from './queries';
import { ApiAllReturnTypes, ApiByIdReturnTypes } from './types';
import useSWR from 'swr';
const serverEndpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/graphql'
    : 'http://some-fancy-graphql-endpoint.com/graphql';

const graphClient = new GraphQLClient(serverEndpoint);

// CORS
if (process.env.NODE_ENV === 'development') {
  graphClient.setHeader('Access-Control-Allow-Origin', '*');
  graphClient.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
}
/**
 * Hook to request all the data regarding an specific resource type in the enddpoint
 * @param resourceType - choose from one of the resources available in the endpoint
 * @returns Array of data
 */
export const useRequestAll = <T extends keyof ApiAllReturnTypes>(
  resourceType: T
) => {
  const fetcher = (query: string) =>
    graphClient.request<ApiAllReturnTypes[T]>(query);

  const swr = useSWR(getAllQuery(resourceType), fetcher);

  return swr;
};

/**
 * Hook to request specific data by using an id and setting the resource type as well
 * @param resourceType - choose from one of the resources available in the endpoint
 * @param id - Id of the specific element in the database
 * @returns An element
 */
export const useRequestById = <T extends keyof ApiByIdReturnTypes>(
  resourceType: T,
  id: string
) => {
  const fetcher = (query: string) =>
    graphClient.request<ApiByIdReturnTypes[T]>(query);

  const swr = useSWR(getByIdQuery(resourceType, id), fetcher);

  return swr;
};
