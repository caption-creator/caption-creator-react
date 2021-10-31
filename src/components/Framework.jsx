import React from 'react'
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Body = styled.div`
  min-height: 80vh;
`

const Framework = props => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    //유저 정보가 없으면 로그인페이지로
    if(window.location.pathname !== "/auth"){
      if(!window.localStorage.getItem("auth_id") 
        || !window.localStorage.getItem("auth_pw"))
      {
        window.location.href="/auth"
      }
    }
    setTimeout(() => {
      setLoading(true)
    }, 100)
  }, [])

  if(loading){
    return (
      <div>
        <Header />
        <Body>
          {props.children}
        </Body>
        <Footer />
      </div>
    )
  }else{
    return (
      <div>loading...</div>
    )
  }

  
}

export default Framework;