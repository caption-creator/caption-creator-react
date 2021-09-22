import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const Wrapper = styled.div`
  height: 60px;
  border-bottom: 1px solid #EEEEEE;
  background-color: #007AFF;
`

const Logo = styled.p`
  font-weight: 900;
  color: #FFFFFF;
  cursor: pointer;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const MenuButton = styled.div`
  cursor: pointer;
  color: #FFFFFF;
`

const MenuIcon = styled.i`
  font-size: 20px;
  height: 20px;
  align-self: center;

`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
`

const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  max-width: 300px;
  height: 400px;
  background-color: #F2F2F2;
  z-index: 10px;
  border: 1px solid #CCCCCC;
`

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo>
          Caption Creater
        </Logo>
        <Spacer />
        <MenuButton onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon className="fi fi-rr-menu-burger" />
        </MenuButton>
        {openMenu &&
          <MenuContainer>
            MenuContents...
          </MenuContainer>
        }
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header;