import { Grid } from "@material-ui/core";
import styled from 'styled-components'
import React from "react";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
`

const MultiImageIcon = styled.div`

`

const SingleIGPost = ({ post, onClick }) => {
  const { id, image, image2, caption, createdByCC, imageList} = post;
  const [size, setSize] = React.useState(0);
  const boxRef = React.useRef();

  React.useEffect(() => {
    if (boxRef.current) {
      setSize(boxRef.current.offsetWidth);
    }
  }, [boxRef]);

  return (
    <Grid item xs={4} md={3}>
      <ImageWrapper ref={boxRef} onClick={onClick} height={size}>
        <img
          src={imageList ?
            `https://cdn.captioncreator.workers.dev/${imageList[0]}`
          :
            `https://cdn.captioncreator.workers.dev/${image}`
          }
          style={{
            width: "100%",
            display: 'block',
          }}
          alt={caption}
        />
        <MultiImageIcon />
      </ImageWrapper>
    </Grid>
  );
};

export default SingleIGPost;
