import axios from '@/libs/api.request';

export const getUserInfo = () => {
  return axios.request({
    url: '',
    method: 'get'
  });
};
