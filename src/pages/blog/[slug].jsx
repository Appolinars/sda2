import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import posts from "@data/posts.json";

import Layout from "@components/Layout/Layout";
import BlogItem from '@components/BlogItem/BlogItem';
import { ArrowLeft } from '@components/SVGIcons/SVGIcons';

import "swiper/css";
import "swiper/css/free-mode";
import styles from './Blog.module.scss'

const Post = ({ post, posts = [] }) => {
  return (
    <div className="container">
      <article className={styles.post}>
        <div className={styles.post__intro}>
          <Link href="/blog">
            <a className={styles.post__back}>
              <ArrowLeft />
              Back to blog
            </a>
          </Link>
          <p className={styles.post__date}>{post.dateFormatted}</p>
          <h1 className="heading__title">{post.title}</h1>
          <ul className={styles.post__tags}>
            {post.category.map((cat) => (
              <li className={styles.post__tags_item} key={cat}>
                #{cat}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.post__img}>
          <Image src={post.main_img} alt={post.title} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </article>

      {posts.length > 6 && (
        <Swiper
          className={styles.post__slider}
          modules={[FreeMode]}
          freeMode
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 50,
            },
            1100: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3.2,
            },
          }}
        >
          {posts.slice(0, 6).map((post) => (
            <SwiperSlide key={post.date} className={styles.post__slide}>
              <BlogItem post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      post: posts.find((post) => post.slug === ctx.params.slug),
      posts,
    },
  };
};

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

Post.getLayout = function getLayout(page) {
  return <Layout title={`${page.props.post.title}`}>{page}</Layout>;
};

export default Post
