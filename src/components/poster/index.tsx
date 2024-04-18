import styles from "./poster.module.css";
export const Poster = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <img src="/tripleheader.jpg" alt="" />
      </div>
      <div className={styles.separator} />
    </div>
  );
};
