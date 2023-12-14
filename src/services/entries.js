import axios from 'axios';

const baseURL = '/api/entries';

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);

  return request.then((response) => response.data);
};

const read = () => {
  const request = axios.get(baseURL);

  return request.then((response) => response.data);
};

const destroy = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};


const update = (id, entry) => {
  const request = axios.put(`${baseURL}/${id}`, entry);

  return request.then((response) => response.data);
};

export default { create, read, update, destroy };