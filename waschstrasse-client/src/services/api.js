import axios from 'axios';
import qs from 'qs';

export default function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios({
      method,
      url: 'http://localhost:3000/api/auth/signin',
      data: qs.stringify(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(res => {
        return resolve(res.data); 
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
