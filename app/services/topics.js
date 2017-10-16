import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getTopics: () => client.request({
      method: 'GET',
      url: '/topic'
    }),
    createTopic: ({ id, data }) => client.request({
      method: 'POST',
      url: `/topic/${id}`,
      data
    })
  };
};
