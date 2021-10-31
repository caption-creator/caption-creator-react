import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const img_logo = require("../assets/images/logo.png")
const img_logo_text = require("../assets/images/logo_text_grad.png")

const Wrapper = styled.div`
  padding: 50px 0px;
  border-top: 1px solid #CCCCCC;
  background-color: #FFFFFF;
`

const FooterText = styled.p`
  color: #565656;
  font-weight: 900;
  font-size: 14px;
  margin: 0px;
  margin-bottom: 10px;
`

const FooterCaption = styled.p`
  color: #888888;
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  margin-bottom: 5px;
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  aling-items: center;
  margin-bottom: 20px;
`

const TitleImg = styled.img`
  display: block;
  height: 24px;
`

const TitleText = styled.img`
  display: block;
  height: 24px;
  transform: translateY(2px);
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <TitleImg src={img_logo.default} />
          <TitleText src={img_logo_text.default} />
        </TitleWrapper>
        <FooterText>명지대학교 2021 2학기 캡스톤 디자인</FooterText>
        <FooterText>컴퓨터공학과 CC팀</FooterText>
        <FooterCaption>60162099 팀장 김민종</FooterCaption>
        <FooterCaption>60182167 팀원 박소민</FooterCaption>
        <FooterCaption>60162190 팀원 한승우</FooterCaption>
      </Container>
    </Wrapper>
  )
}

export default Footer;