import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const Wrapper = styled.div`
  padding: 50px 0px;
  border-top: 1px solid #CCCCCC;
  background-color: #FFFFFF;
`

const FooterText = styled.p`
  color: #565656;
  font-weight: 500;
  font-size: 14px;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterText>This is Footer.</FooterText>
      </Container>
    </Wrapper>
  )
}

export default Footer;