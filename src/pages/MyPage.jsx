import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SingleIGPost from "../components/SingleIGPost";
import { getPost } from "../services/post";

const user_id = window.localStorage.getItem("auth_id");
const user_pw = window.localStorage.getItem("auth_pw");

const MyPage = () => {
  const [posts, setPosts] = useState(null);

  const initPost = async() => {
    const res = await getPost(user_id, user_pw);
    setPosts(res.data);
  }

  useEffect(() => {
    initPost()
  }, []);

  return (
    <Container>
      <div style={{ padding: 20 }}>
        <h1>@{user_id} 's IG Feed</h1>
        <br />
        <br />
        <Grid container spacing={1}>
          {posts &&
            posts.map((post) => <SingleIGPost key={post.id} post={post} />)}
        </Grid>
      </div>
    </Container>
  );
};

export default MyPage;
