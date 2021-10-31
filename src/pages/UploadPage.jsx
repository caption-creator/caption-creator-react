import React from 'react';
import Container from '../components/Container';
import FeedWriteContainer from '../components/FeedWriteContainer';
import UploadContainer from '../components/UploadContainer';


const UploadPage = () => {

  return (
    <Container>
      <div style={{marginBottom: 20}}>
        <UploadContainer />
      </div>
      <FeedWriteContainer />
    </Container>
  )
}

export default UploadPage;