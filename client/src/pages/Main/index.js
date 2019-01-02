import React, { Component, Fragment } from "react";

import GlobalStyle from "../../styles/global";

import Post from "../../components/Post";
// import api from "../../services/api";

export default class Main extends Component {
  state = {
    posts: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ posts: await this.runApi() });
  }

  runApi = async () => {
    const response = await fetch("/posts");
    const posts = await response.json();
    console.log(posts);
    return posts.docs;
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <h1>Postagens</h1>
        <Post posts={posts} />
      </Fragment>
    );
  }
}
