import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'
import Container from '../components/Container';
import UploadContainer from '../components/UploadContainer';


const Hint = styled.p`
  color: #FFFFFF;
  font-size: 12px;
  margin: 0px;
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
    >
      <div
        ref={boxRef}
        style={{
          width: '100%', 
          height: size, 
          backgroundColor: '#' + Math.round(Math.random() * 0xffffff).toString(16),
          borderRadius: 5,
        }}
      >
        <div style={{padding: 10}}>
          <Hint>여기는 본인 사진</Hint>
          <Hint>클릭 시 정보 출력</Hint>
        </div>
        
      </div>
      
    </Grid>
  )
}

const MyPage = () => {
  return (
    <Container>
      <div style={{padding: 20}}>
        <Grid container spacing={1}>
          {["","","","","","","","","","",""].map((item, idx) => {
            return <GridBox />
          }) }
        </Grid>
      </div>
    </Container>
  )
}

export default MyPage;