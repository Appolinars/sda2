import { useEffect } from "react";
import styles from "./BlogTags.module.scss";

// Should be the same with array of categories from admin's config "public/admin/config.yml" but start with "All"
const tags = [
  "All",
  "Outsource",
  "Outstaff",
  "Frontend",
  "APPIntegration",
  "Fintech",
  "Online Media",
  "Healthcare",
  "JavaScript",
  "React",
  "VueJS",
  "NextJS",
  "Node.JS",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Mongo",
  "Firebase",
  "PHP",
  "Yii",
  "Laravel",
  "WordPress",
  "HTML",
  "MVP",
  "APP",
  "Elementor",
  "ACF",
  "Ui/UX",
  "Webdesign",
  "Fullstack",
  "Backend",
  "Figma",
  "Github",
];

const BlogTags = ({ checkedTag, setCheckedTag, allPosts, setPostsToShow, setIsEmpty }) => {
  const handleTagChange = (e) => {
    const tag = e.target.value;
    setCheckedTag(tag);
    if (tag === "All") setPostsToShow(allPosts);
  };

  useEffect(() => {
    const filterPosts = () => {
      if (checkedTag === "All") return;
      let filteredPosts = allPosts.filter((post) => {
        for (const cat of post.category) {
          if (cat === checkedTag) return post;
        }
      });
      if (filteredPosts.length !== 0) {
        setPostsToShow(filteredPosts);
        setIsEmpty(false);
      } else {
        setPostsToShow([]);
        setIsEmpty(true);
      }
    };
    filterPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedTag]);

  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li className={styles.tags__item} key={tag}>
          <input
            className="input"
            type="radio"
            name="activeTag"
            id={tag}
            value={tag}
            checked={tag === checkedTag ? true : false}
            onChange={(e) => handleTagChange(e)}
          />
          <label htmlFor={tag}>#{tag}</label>
        </li>
      ))}
    </ul>
  );
};

export default BlogTags;
