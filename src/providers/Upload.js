import React, { createContext } from "react";

/*
  UploadContext는 사진 업로드에 대한 상태를 관리합니다.
  다른 페이지 또는 컴포넌트에서 사진 업로드를 감지하기 위해 Context API를 사용하여
  prop-drilling 이슈를 해결합니다.
*/
export const UploadContext = createContext({
  "selectedFiles"     : [],
  "setSelectedFiles"  : () => {},
});

const UploadProvider = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  const value = {
    "selectedFiles"     : selectedFiles,
    "setSelectedFiles"  : setSelectedFiles
  }

  return (
    <UploadContext.Provider value={value}>
      {children}
    </UploadContext.Provider>
  )
};

export default UploadProvider;