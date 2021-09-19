import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Body = styled.div`
  min-height: 80vh;
`

const Framework = props => {

  React.useEffect(() => {
    //로그인 관련된 처리는 이 곳에서 진행됩니다.
  }, []);

  return (
    <div>
      <Header />
      <Body>
        {props.children}
      </Body>
      <Footer />
    </div>
  )
}

export default Framework;