import React from 'react';
import styled from 'styled-components'
import { IgApiClient } from 'instagram-private-api';
import InputText from '../components/InputText';
import { postLogin } from '../services/auth';
import { Backdrop, CircularProgress } from '@material-ui/core';

const img_logo = require("../assets/images/logo.png");

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: 0px auto;
`

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 200px;
  margin: 60px auto;
`

const InputGroupWrapper = styled.div`
  max-width: 500px;
  margin: 0px auto;
  margin-bottom: 20px;
`

const Button = styled.button`
  border: none;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  font-size: 20px;
  font-weight: 900;
  color: #FFFFFF;
  display: block;
  margin: 0px auto;
  width: 100%;
  padding: 20px 10px;
  max-width: 500px;
  border-radius: 5px;
  cursor: pointer;
  
`

const AuthPage = () => {
  const ig = new IgApiClient();
  ig.state.proxyUrl = "https://wrtn-heroku-proxy-anywere.herokuapp.com/"

  const [form, setForm] = React.useState({
    id : window.localStorage.getItem("auth_id") || "",
    pwd : window.localStorage.getItem("auth_pw") || "",
  })

  const [loading, setLoading] = React.useState(false)

  const handleForm = event => {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  const processLogin = async() => {
    try{
      setLoading(true)

      if(window.location.origin === "http://localhost:3000"){
        window.localStorage.setItem("auth_id", form.id)
        window.localStorage.setItem("auth_pw", form.pwd)
        window.location.href="/"
        return;
      }
      
      const res = await postLogin(form)

      if(res && res.status === 201){
        if(res.data === true){
          window.localStorage.setItem("auth_id", form.id)
          window.localStorage.setItem("auth_pw", form.pwd)
          window.location.href="/"
        }else{
          alert("아이디 또는 비밀번호가 잘못되었습니다.")
        }
        setLoading(false)
      }
    }catch(e) {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <Logo src={img_logo.default} alt="" />
      <InputGroupWrapper>
        <div>
          <InputText 
            name="id" 
            label="계정 이름" 
            value={form.id} 
            onChange={handleForm}
            placeholder="사용하시는 인스타그램 계정 이름을 입력하세요."
          />
          <InputText 
            name="pwd" 
            type="password" 
            label="암호" 
            value={form.pwd} 
            onChange={handleForm} 
            placeholder="위 계정의 비밀번호를 입력하세요."
          />
        </div>
      </InputGroupWrapper>
      <Button onClick={processLogin}>
        로그인
      </Button>
      <Backdrop style={{zIndex: 999999}} open={loading}>
        <CircularProgress />
      </Backdrop>
    </Wrapper>
  )
}

export default AuthPage;