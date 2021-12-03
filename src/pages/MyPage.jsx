import { Dialog, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SingleIGPost from "../components/SingleIGPost";
import { getPost } from "../services/post";

const user_id = window.localStorage.getItem("auth_id");
const user_pw = window.localStorage.getItem("auth_pw");

const MyPage = () => {
  const [posts, setPosts] = useState(null);
  const [current, setCurrent] = React.useState(null);

  const initPost = async() => {
    const res = await getPost(user_id, user_pw);
    setPosts(res.data);
  }

  useEffect(() => {
    initPost()
  }, []);

  React.useEffect(() => {
    console.log(current)
  }, [current])

  return (
    <Container>
      <div style={{ padding: 20 }}>
        <h1>@{user_id} 's IG Feed</h1>
        <br />
        <br />
        <Grid container spacing={1}>
          {posts &&
            posts.map((post) => <SingleIGPost key={post.id} post={post} onClick={() => setCurrent(post)} />)}
        </Grid>
      </div>
      <Dialog maxWidth="xs" fullWidth open={current ? true : false} onClose={() => setCurrent(null)}>
        {current &&
          <div style={{padding: 20}}>    
            <img
              src={current.imageList ?
                `https://cdn.captioncreator.workers.dev/${current.imageList[0]}`
              :
                `https://cdn.captioncreator.workers.dev/${current.image}`
              }
              style={{
                width: "100%",
                backgroundSize: "cover",
                borderRadius: 5,
                cursor: "pointer",
                marginBottom: 40
              }}
            />
            <Typography style={{fontSize: 14, lineHeight: 16, color: '#333'}}>
              {current.caption}
            </Typography>
          </div>
        }
      </Dialog>
    </Container>
  );
};

export default MyPage;
