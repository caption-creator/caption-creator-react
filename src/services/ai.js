import { apiInstance } from './index';

export const postOCR = async(url) => {
  return await apiInstance.post("/ai/image", {
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

export const postGPT = async(keywords, id, pw, type) => {
  return await apiInstance.post("/ai/writing" + ( type ? "/" + type : "" ), {
    keywordList : keywords,
    id: id,
    pwd: pw,
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