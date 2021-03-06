import React, { useContext } from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import UploadContainer from '../components/UploadContainer';
import { UploadContext } from '../providers/Upload';
import FeedWriteContainer from '../components/FeedWriteContainer';
import { Grid, Typography } from '@material-ui/core';

const Title = styled.p`
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.index * 24}px;
  left: ${props => props.index * 24}px;
`

const ImageGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: #F1F1F1;
  overflow: hidden;
  border-radius: 10px;
`

const Logo = styled.img`
  height: 60px;
`

const Text = styled.p`
  margin: 0px;
  color: #888888;
  font-size: 14px;
  line-height: 18px;
`

const Caption = styled.p`
  margin: 0px;
  color: #333333;
  font-size: 12px;
  line-height: 14px;
`

const InfoWrapper = styled.div`
  height: 400px;
  align-items: center;
  max-width: 400px;
  display: flex;
`

const StartButton = styled.button`
  margin-top: 40px;
  border: none;
  border-radius: 20px;
  padding: 8px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #333333;
  cursor: pointer;
`

const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 8px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #333333;
  cursor: pointer;
  display: block;
  margin: 0px auto;
`

const HashTag = styled.span`
  color: #007AFF;
`

const MainPage = () => {
  const { selectedFiles } = useContext(UploadContext)
  const scrollRef = React.useRef()

  React.useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedFiles])
  

  const render = () => {
    if(selectedFiles.length === 0){
      return (
        <div>

        </div>
        
      )
    }else{
      return (
        <div ref={scrollRef}>
          <Title>?????? ?????????</Title>
          <FeedWriteContainer />
        </div>
      )
    }
  }

  const images = ['https://ifh.cc/g/385Alu.jpg','https://ifh.cc/g/TCPqcf.jpg','https://ifh.cc/g/NyshvI.jpg',]

  return (
    <Container>
      <Grid container spacing={2} style={{borderBottom: '1px solid #EEEEEE'}}>
        <Grid item xs={12} md={5}>
          <ImageGroupWrapper>
            <div style={{position:'relative', minHeight: 220, minWidth: 200}}>
              {images.map((item, idx) => {
                return (
                  <Wrapper key={idx} index={idx}>
                    <ImageWrapper>
                      <Image src={item} />
                    </ImageWrapper>
                    {idx === 2 &&
                      <div style={{position: 'absolute', right: 0, width: 250, background:'rgba(255,255,255, 0.8)', padding: 5, borderRadius: 5, textAlign:'center'}}>
                        <Caption>AI : ?????? <HashTag>#???????????????</HashTag> ?????? ???????????? ????????????!</Caption>
                      </div>
                    }
                  </Wrapper>
                )
              })}
            </div>
          </ImageGroupWrapper>
        </Grid>
        <Grid item xs={12} md={7}>
          <InfoWrapper>
            <div>
              <Logo src={require("../assets/images/logo_text_black.png").default} />
              <Text>Caption Creator??? 2021????????? 2?????? ?????????????????? ????????? ?????????1 ????????? CC????????? ????????? AI ?????? ??????????????? ?????? ?????? ?????? ??? ???????????????????????????.</Text>
              <StartButton>?????? ????????????</StartButton>
            </div>
          </InfoWrapper>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{margin: '50px 0px'}}>
        <Grid item xs={12} md={6}>
          <UploadContainer />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{flex: 1, display: 'flex', alignItems:'center', justifyContent:'center', height: '100%'}}>
            <div>
              <Title style={{fontSize: 24, marginBottom: 40}}>??? ????????? ??? ?????? ?????? ?????? ??? ??? ?????????!</Title>
              <Button onClick={() => window.location.href="/mypage"}>??? ?????? ????????????</Button>
            </div>
          </div>
        </Grid>
      </Grid>
      {render()}
    </Container>
  )
}

export default MainPage;