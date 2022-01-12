import { useEffect, useRef, useState } from "react";
import { useCloseOnDomClick } from "src/utils/hooks";
import styles from "./BlogSort.module.scss";

const BlogSort = ({ posts, setPosts }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortDateDirection, setSortDateDirection] = useState("ASC");

  const filterListRef = useRef(null);

  useCloseOnDomClick(filterListRef, isFilterOpen, setIsFilterOpen);

  useEffect(() => {
    if (posts) {
      let sortedPosts = [...posts];
      switch (sortDateDirection) {
        case "DESC":
          sortedPosts.sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime());
          setPosts(sortedPosts);
          break;
        case "ASC":
          sortedPosts
            .sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime())
            .reverse();
          setPosts(sortedPosts);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortDateDirection]);

  const handleSortBy = (e) => {
    setSortDateDirection(e.target.name);
    setIsFilterOpen(false);
  };

  return (
    <div className={styles.sort}>
      <button
        className={
          isFilterOpen ? `${styles.sort__picked} ${styles.active}` : `${styles.sort__picked}`
        }
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        {sortDateDirection === "ASC" ? <>Newest first</> : <>Oldest first</>}
      </button>
      {isFilterOpen && (
        <div className={`${styles.sort__list}`} ref={filterListRef}>
          <button name="ASC" className={`${styles.sort__item}`} onClick={handleSortBy}>
            Newest first
          </button>
          <button name="DESC" className={`${styles.sort__item}`} onClick={handleSortBy}>
            Oldest first
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSort;
