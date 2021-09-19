import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px dashed #565656;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UploadText = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #565656;
`

const UploadContainer = () => {
  return (
    <Wrapper>
      <UploadText>이 곳을 클릭하거나 사진을 끌어 넣으세요.</UploadText>
    </Wrapper>
  )
}

export default UploadContainer;