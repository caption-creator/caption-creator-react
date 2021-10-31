import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: window.location.origin === "http://localhost:3000" ? "http://localhost:4000" : "https://mjucc.run.goorm.io/",
})


export const tempConfig = {
  bucketName: "caption-creator-image-storage",
  dirName: "temp",
  region: "ap-northeast-2",
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
};

export const storageConfig = {
  bucketName: "caption-creator-image-storage",
  dirName: "storage",
  region: "ap-northeast-2",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
};
