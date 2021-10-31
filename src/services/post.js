import { apiInstance } from "./index";

export const getPost = async (id, pw) => {
  return await apiInstance.get(
    `/feed?id=${id}&pwd=${pw}`
  )
  .then(res => {
    console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
    return err.response;
  })
};