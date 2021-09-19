import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
  background-color: #007AFF;
`

const Logo = styled.p`
  font-weight: 900;
  color: #FFFFFF;
  cursor: pointer;
`

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          Caption Creater
        </Logo>
      </Container>
    </Wrapper>
  )
}

export default Header;