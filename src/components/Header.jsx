import React from 'react'
import styled from 'styled-components'

const img_logo_text_grad = require("../assets/images/logo_text_black.png")

const Wrapper = styled.div`
  height: 60px;
  padding: 0px 20px;
  border-bottom: 1px solid #EEEEEE;
  background-color: #FFFFFF;
`

const Logo = styled.img`
  display: block;
  max-height: 36px;
  cursor: pointer;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const MenuButton = styled.div`
  cursor: pointer;
  color: #007AFF;
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
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
`

const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  max-width: 300px;
  background-color: #FFFFFF;
  z-index: 10px;
  border: 1px solid #CCCCCC;
`

const I = styled.i`
  align-self: center;
`

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo src={img_logo_text_grad.default} onClick={() => window.location.href = "/"} />
        <Spacer />
        <MenuButton onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon className="fi fi-rr-menu-burger" />
        </MenuButton>
        {openMenu &&
          <MenuContainer>
            <div onClick={() => window.location.href="/"} style={{padding: 20, fontSize: 14, borderBottom: '1px solid #CCC', display: 'flex', width:'calc(100% - 40px)', cursor: 'pointer'}}>
              <p style={{margin: 0}}>홈</p>
              <Spacer />
              <I className="fi fi-rr-angle-right" />
            </div>
            <div onClick={() => window.location.href="/upload"} style={{padding: 20, fontSize: 14, borderBottom: '1px solid #CCC', display: 'flex', width:'calc(100% - 40px)', cursor: 'pointer'}}>
              <p style={{margin: 0}}>AI 피드 자동작성</p>
              <Spacer />
              <I className="fi fi-rr-angle-right" />
            </div>
            <div onClick={() => window.location.href="/mypage"} style={{padding: 20, fontSize: 14, borderBottom: '1px solid #CCC', display: 'flex', width:'calc(100% - 40px)', cursor: 'pointer'}}>
              <p style={{margin: 0}}>나의 인스타그램</p>
              <Spacer />
              <I className="fi fi-rr-angle-right" />
            </div>
            <div onClick={() => window.location.href="/usage"} style={{padding: 20, fontSize: 14, borderBottom: '1px solid #CCC', display: 'flex', width:'calc(100% - 40px)', cursor: 'pointer'}}>
              <p style={{margin: 0}}>실시간 사용 현황</p>
              <Spacer />
              <I className="fi fi-rr-angle-right" />
            </div>

          </MenuContainer>
        }
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header;