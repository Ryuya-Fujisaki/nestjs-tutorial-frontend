import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getAllPosts } from "@/utils/api";
import { PostType } from "@/utils/types";
import Link from "next/link";

type HomeProps = {
  posts: PostType[];
};

export async function getStaticProps() {
  const posts: PostType[] = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Nest.js Blog" />
      </Head>

      <div className={styles.container}>
        <h1>Nest.js Blog</h1>
        <ul className={styles.postList}>
          {posts.map((post: PostType) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              style={{ textDecoration: "none" }}
            >
              <li className={styles.post}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.author}>By {post.author}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
