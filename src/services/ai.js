import { apiInstance } from './index';

export const postOCR = (url) => {
  return apiInstance.post("/ai/image", {
    imageLink : url
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