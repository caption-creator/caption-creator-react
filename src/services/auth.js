import { apiInstance } from './index';

export const postLogin = async({ id, pwd }) => {
  return await apiInstance.post("/auth", {
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