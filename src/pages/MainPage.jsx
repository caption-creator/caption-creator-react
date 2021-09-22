import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components';


const Title = styled.p`
  margin: 0px;
`

const Link = styled.p`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const MainPage = () => {

  const to = path => {
    window.location.href = path;
  }

  return (
    <Container>
      <Link onClick={() => to("/")}>홈</Link> 
      <Link onClick={() => to("/")}>업로드</Link> 
      <Link onClick={() => to("/")}>로그인</Link> 
      <Link onClick={() => to("/")}></Link> 
    </Container>
  )
}

export default MainPage;