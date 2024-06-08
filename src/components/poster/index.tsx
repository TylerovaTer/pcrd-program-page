import styles from "./poster.module.css";

type PropTypes = {
  src: string;
  alt: string;
};

export const Poster = ({src, alt}: PropTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.separator} />
    </div>
  );
};
