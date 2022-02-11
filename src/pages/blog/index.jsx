import { useState } from "react";
// import Script from "next/script";

import posts from "@data/posts.json";

import BlogSort from "@components/BlogSort/BlogSort";
import BlogTags from "@components/BlogTags/BlogTags";
import Layout from "@components/Layout/Layout";
import BlogItem from "@components/BlogItem/BlogItem";
import { FilesEmptyIcon } from "@components/SVGIcons/SVGIcons";
import styles from "./Blog.module.scss";

const Blog = ({ posts = [] }) => {
  const [checkedTag, setCheckedTag] = useState("All");
  const [postsToShow, setPostsToShow] = useState(posts);
  const [isEmpty, setIsEmpty] = useState(false);
  const [listLength, setListLength] = useState(6);

  return (
    <>
      <section className={styles.blog}>
        <div className="container">
          <h1 className="heading__title">Blog</h1>
          <BlogTags
            allPosts={posts}
            checkedTag={checkedTag}
            setCheckedTag={setCheckedTag}
            setPostsToShow={setPostsToShow}
            setIsEmpty={setIsEmpty}
          />
          <div className={styles.blog__sort}>
            <BlogSort posts={postsToShow} setPosts={setPostsToShow} />
          </div>
          {posts.length === 0 && (
            <div className={styles.blog__empty}>
              <FilesEmptyIcon />
              <p>So far there is nothing here</p>
            </div>
          )}
          {isEmpty && checkedTag !== "All" && (
            <div className={styles.blog__empty}>
              <FilesEmptyIcon />
              <p>No posts matching the request</p>
            </div>
          )}
          {postsToShow.length !== 0 && (
            <ul className={styles.blog__list}>
              {postsToShow.slice(0, listLength).map((post) => (
                <BlogItem key={post.date} post={post} hasMinHeight adaptiveWidth />
              ))}
            </ul>
          )}
          {postsToShow.length > listLength && !isEmpty && (
            <div className="btn--center">
              <button
                className="btn btn--white"
                onClick={() => setListLength((prevValue) => prevValue + 6)}
              >
                Show more articles
              </button>
            </div>
          )}
        </div>
      </section>
      {/* <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Script src="/netlifyIdentity.js"></Script> */}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}

Blog.getLayout = function getLayout(page) {
  return <Layout title="SDA | Blog">{page}</Layout>;
};

export default Blog;
