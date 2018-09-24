import axios from 'axios';
import qs from 'qs';

export default function apiCall(method, type, data) {
  return new Promise((resolve, reject) => axios({
    method,
    url: `http://localhost:3000/api/auth/${type}`,
    data: qs.stringify(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
    .then(res => resolve(res.data))
    .catch(err => reject(err.response.data.error)));
}
