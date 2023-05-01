import { getAllPosts, getPostById } from "@/utils/api";
import { PostType } from "@/utils/types";
import styles from "@/styles/Post.module.css";
import React from "react";

export async function getStaticProps({ params }: any) {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Post = ({ post }: any) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.meta}>Author: {post.author}</p>
      <p className={styles.meta}>Created at: {post.createdAt}</p>
    </div>
  );
};

export default Post;
