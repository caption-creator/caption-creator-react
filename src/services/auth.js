import { apiInstance } from './index';

export const postLogin = ({ id, pwd }) => {
  return apiInstance.post("/auth", {
    id, pwd
  })
  .then(res => {
    console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
    return err.response;
  })
} 