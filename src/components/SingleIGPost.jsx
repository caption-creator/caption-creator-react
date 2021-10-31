import { Grid } from "@material-ui/core";
import React from "react";

const SingleIGPost = ({ post }) => {
  const { id, image, image2, caption, createdByCC } = post;
  const [size, setSize] = React.useState(0);
  const boxRef = React.useRef();

  React.useEffect(() => {
    if (boxRef.current) {
      setSize(boxRef.current.offsetWidth);
    }
  }, [boxRef]);

  return (
    <Grid item xs={4}>
      <img
        src={`https://cdn.captioncreator.workers.dev/${image}`}
        ref={boxRef}
        style={{
          width: "100%",
          height: size,
          backgroundSize: "cover",
          borderRadius: 5,
          cursor: "pointer",
        }}
        alt={caption}
      />
    </Grid>
  );
};

export default SingleIGPost;
