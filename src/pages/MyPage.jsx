import { Dialog, Grid, Typography, Backdrop, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SingleIGPost from "../components/SingleIGPost";
import { getPost } from "../services/post";
import styled from 'styled-components'

const user_id = window.localStorage.getItem("auth_id");
const user_pw = window.localStorage.getItem("auth_pw");

const Hint = styled.p`
  margin: 0px;
  margin-top: 20px;
  font-size: 12px;
  color: #888888;
  font-weight: 600;
  text-align: center;
`

const MyPage = () => {
  const [posts, setPosts] = useState(null);
  const [current, setCurrent] = React.useState(null);
  const [load, setLoad] = React.useState(false)

  const initPost = async() => {
    setLoad(true)
    const res = await getPost(user_id, user_pw);
    setPosts(res.data);
    setLoad(false)
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
            <Typography style={{fontSize: 14, color: '#333'}}>
              {current.caption}
            </Typography>
          </div>
        }
      </Dialog>
      <Backdrop style={{backgroundColor:"rgba(255,255,255, 0.1)"}} open={load}>
        <div>
          <CircularProgress style={{width: 48, height: 48, color: '#007AFF', display:'block', margin: '0px auto'}} />
          <Hint>잠시만 기다려주세요.</Hint>
        </div>
        
      </Backdrop>
    </Container>
  );
};

export default MyPage;
