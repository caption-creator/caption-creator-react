import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { UploadContext } from "../providers/Upload";

const GetColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: dashed;
  border-color: ${(props) => GetColor(props)};
  border-width: 2px;
  border-radius: 2px;
  background-color: #fafafa;
  max-width: 800px;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;

const UploadText = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #565656;
  font-weight: 600;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16;
`;

const Thumb = styled.div`
  display: inline-flex;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const PreviewImg = styled.img`
  display: block;
  width: 100%;
`;

const TypeWarning = styled.p`
  color: #ff1744;
  transition: 0.24s ease-in-out;
`;

const UploadContainer = () => {
  const { selectedFiles, setSelectedFiles } = useContext(UploadContext)
  const imageRef = useRef();
  const [size, setSize] = useState(0);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setSelectedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = selectedFiles.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <PreviewImg src={file.preview} />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(
    () => {
      if(imageRef.current){
        setSize(imageRef.current.offsetWidth - 4)
      }
      
      window.addEventListener("resize", () => {
        if(imageRef.current){
          setSize(imageRef.current.offsetWidth - 4)
        }
      })
    },
    [imageRef.current]
  );


  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [selectedFiles]
  );

  

  return (
    <Wrapper 
      {...getRootProps({ isDragActive, isDragAccept, isDragReject })} 
      style={{height: size, maxHeight: '800px'}} 
      ref={imageRef} 
    >
      <input 
        {...getInputProps()}       
      />
      {!isDragActive && selectedFiles.length === 0 && (
        <UploadText>이 곳을 클릭하거나 사진을 끌어 넣으세요.</UploadText>
      )}
      {isDragAccept && <ThumbsContainer>{thumbs}</ThumbsContainer>}
      {isDragReject && <TypeWarning>파일 형식이 맞지 않아요</TypeWarning>}
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </Wrapper>
  );
};

export default UploadContainer;
