import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import UploadContainer from '../components/UploadContainer';

const Title = styled.p`
  font-size: 16px;
  color: #007AFF;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 10px;
`

const MyContentWrapper = styled.div`
  height: 500px;
  overflow: auto;
  margin-bottom: 20px;
`

const Hint = styled.p`
  color: #FFFFFF;
  font-size: 12px;
  margin: 0px;
  padding: 10px;
`

const GridBox = ({ color }) => {
  const [size, setSize] = React.useState(0)
  const boxRef = React.useRef()

  React.useEffect(() => {
    if(boxRef.current){
      setSize(boxRef.current.offsetWidth)
    }
  }, [boxRef])

  return (
    <Grid 
      item
      xs={4} 
      ref={boxRef}
      style={{
        width: '100%', 
        height: size, 
        backgroundColor: '#' + Math.round(Math.random() * 0xffffff).toString(16)
      }}
    >
      <Hint>여기는 사진</Hint>
    </Grid>
  )
}



const MainPage = () => {

  const to = path => {
    window.location.href = path;
  }

  return (
    <Container>
      <Title>여기에 본인 피드 내용이 들어가면 어떨까 싶어요</Title>
      <MyContentWrapper>
        <Grid container>
          {"111111111111111111111".split("1").map((item, idx) => {
            return <GridBox key={idx} color={item} />
          })}
        </Grid>
      </MyContentWrapper>
      <UploadContainer />
    </Container>
  )
}

export default MainPage;