import React, { useContext } from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import UploadContainer from '../components/UploadContainer';
import { UploadContext } from '../providers/Upload';
import FeedWriteContainer from '../components/FeedWriteContainer';

const Title = styled.p`
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 10px;
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
  
  React.useEffect(() => {
    //유저 정보가 없으면 로그인페이지로
    if(!window.localStorage.getItem("auth_id") 
      || !window.localStorage.getItem("auth_pw"))
    {
      window.location.href="/auth"
    }
  }, [])


  const render = () => {
    if(selectedFiles.length === 0){
      return (
        <div>
          <Title>실시간 사용 현황</Title>
          <TestRealTimeViewContainer />
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

  return (
    <Container>
      <div style={{marginBottom: 20}}>
        <UploadContainer />
      </div>
      {render()}
    </Container>
  )
}

export default MainPage;