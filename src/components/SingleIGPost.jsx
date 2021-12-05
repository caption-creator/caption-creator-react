import { Grid } from "@material-ui/core";
import styled from 'styled-components'
import React from "react";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  cursor: pointer;
  overflow: hidden;
`

const MultiImageIcon = styled.div`

`

const SingleIGPost = ({ post, onClick }) => {
  const { id, image, image2, caption, createdByCC, imageList} = post;
  const [size, setSize] = React.useState(0);
  const boxRef = React.useRef();
  const imageRef = React.useRef();
  const [height, setHeight] = React.useState("auto");
  const [width, setWidth] = React.useState("100%");

  React.useEffect(() => {
    if (boxRef.current) {
      setSize(boxRef.current.offsetWidth);
    }
  }, [boxRef]);
  
  React.useEffect(() => {
    if(imageRef.current && size > 0){
      if(imageRef.current.offsetHeight < size){
        console.log("ㅋㅋ")
        setHeight("100%")
        setWidth("auto")
        imageRef.current.style.height = size
      }
    }
  }, [imageRef, size])

  return (
    <Grid item xs={4} md={3}>
      <ImageWrapper ref={boxRef} onClick={onClick} height={size}>
        <img
          ref={imageRef}
          src={imageList ?
            `https://cdn.captioncreator.workers.dev/${imageList[0]}`
          :
            `https://cdn.captioncreator.workers.dev/${image}`
          }
          style={{
            width: width,
            display: 'block',
            height: height,
          }}
          alt={caption}
        />
        <MultiImageIcon />
      </ImageWrapper>
    </Grid>
  );
};

export default SingleIGPost;
