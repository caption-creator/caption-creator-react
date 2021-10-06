import { React, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px dashed #565656;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadText = styled.label`
  margin: 0px;
  font-size: 14px;
  color: #565656;
`;

const PreviewImg = styled.img`
  width: 50px;
  height: 50px;
`;

const UploadContainer = () => {
  const [selectedFile, setSelectedFile] = useState({
    file: "",
    previewURL: "",
  });
  const fileChangedHandler = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setSelectedFile({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
    console.log(file);
  };

  return (
    <Wrapper>
      <UploadText>이 곳을 클릭하거나 사진을 끌어 넣으세요.</UploadText>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg"
        name="uploadImg"
        onChange={fileChangedHandler}
      />
      {selectedFile.file && (
        <PreviewImg alt="uploaded image" src={selectedFile.previewURL} />
      )}
    </Wrapper>
  );
};

export default UploadContainer;
