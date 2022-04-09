import axiosClient from './axiosClient';

const fetchApi = {
  getData(params) {
    const url = `${params}`;
    return axiosClient.get(url, { params: params });
  },
};

export default fetchApi;
