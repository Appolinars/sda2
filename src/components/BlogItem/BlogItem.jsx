import Image from "next/image";
import Link from "next/link";
import styles from "./BlogItem.module.scss";

const BlogItem = ({ post, hasMinHeight, adaptiveWidth }) => {
  return (
    <li
      className={`${styles.item} ${hasMinHeight && `${styles.item_height}`} ${
        adaptiveWidth && `${styles.item_width}`
      }`}
      //   className={
      //     hasMinHeight ? `${styles.item} ${styles.item_height}` : styles.item
      //   }
    >
      {post.main_img && (
        <div className={styles.item__img}>
          <Image
            layout="fill"
            src={post.preview_img ? post.preview_img : post.main_img}
            alt={post.title}
          />
        </div>
      )}
      <p className={styles.item__date}>{post.dateFormatted}</p>
      <h2 className={styles.item__title}>{post.title}</h2>
      <p className={styles.item__text}>{`${post.body.slice(0, 110)}...`}</p>
      {post.category.length !== 0 && (
        <ul className={styles.item__tags}>
          {post.category.map((cat) => (
            <li key={cat} className={styles.item__tag}>
              #{cat}
            </li>
          ))}
        </ul>
      )}
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a className={styles.item__link}>Read full article</a>
      </Link>
    </li>
  );
};

export default BlogItem;
