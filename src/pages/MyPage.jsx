import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SingleIGPost from "../components/SingleIGPost";

const user_id = window.localStorage.getItem("auth_id");
const user_pw = window.localStorage.getItem("auth_pw");

const MyPage = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `http://localhost:4000/feed?id=${user_id}&pwd=${user_pw}`
      );
      console.log(res);
      setPosts(res.data);
    };
    getPost();
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
