import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <a href="#schedule" className={styles.link}>
          Schedule
        </a>
        <a href="#" className={styles.link}>
          Officials
        </a>
        <a href="#rosters" className={styles.link}>
          Rosters
        </a>
        <a href="#" className={styles.link}>
          Rules
        </a>
      </div>
    </div>
  );
};
