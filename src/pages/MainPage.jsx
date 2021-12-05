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

const TestRealTimeViewContainer = () => {
  return (
    <div>
      {["", "", ""].map((item, idx) => {
        return (
          <div key={idx} style={{background: 'rgba(0, 122, 255, 0.1)', borderRadius: 10, padding: 20, fontSize: 14, marginBottom: 20}}>
            <div style={{display: 'flex', gap: 20}}>
              <div style={{flexGrow: 1, alignSelf: 'center'}}>
                <div style={{width: 100, height: 100, background: '#007AFF', borderRadius: 10}} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 5}}>changgeon718</p>
                <p style={{margin: 0, fontSize: 12, color: '#007AFF', marginBottom: 5}}>#키워드1 #키워드2 #키워드3</p>
                <p style={{margin: 0, marginBottom: 20}}>
                  제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
                </p>
                <div style={{display: 'flex', justifyContent:'flex-end', width:'100%'}}>
                  댓글 392개 | 좋아요 1129개
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const MainPage = () => {
  const { selectedFiles } = useContext(UploadContext)

  const render = () => {
    if(selectedFiles.length === 0){
      return (
        <div>

        </div>
        
      )
    }else{
      return (
        <div>
          <Title>피드 업로드</Title>
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
                        <Caption>AI : 오늘 <HashTag>#실외카트장</HashTag> 에서 재미있게 놀았어요!</Caption>
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
              <Text>Caption Creator는 2021학년도 2학기 컴퓨터공학과 캡스톤 디자인1 과목의 CC팀에서 개발한 AI 기반 인스타그램 피드 자동 생성 웹 어플리케이션입니다.</Text>
              <StartButton>지금 시작하기</StartButton>
            </div>
          </InfoWrapper>
        </Grid>
      </Grid>
      <div style={{display: 'flex', width: '100%', alignItems:'center', minHeight: 400, padding: '50px 0px'}}>
        <div style={{flex: 1}}>
          <UploadContainer />
        </div>
        <div style={{flex: 1, display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <div>
            <Title style={{fontSize: 24, marginBottom: 40}}>내 피드를 앱 전환 없이 바로 볼 수 있어요!</Title>
            <Button>내 피드 조회하기</Button>
          </div>
        </div>
      </div>
      {render()}
    </Container>
  )
}

export default MainPage;