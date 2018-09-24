import axios from 'axios';
import qs from 'qs';

export default async function apiCall(method, type, data) {
  try {
    const response = await axios({
      method,
      url: `http://localhost:3000/api/auth/${type}`,
      data: qs.stringify(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  } catch (err) {
    return err.response.data.error;
  }
}
