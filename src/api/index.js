import axios from 'axios';

export default function callApi(endPoint, method = 'get', data) {
  return axios({
    method,
    url: `http://localhost:3000/${endPoint}`,
    data
  }).catch((error) => {
    console.log(error.config);
  });
}
