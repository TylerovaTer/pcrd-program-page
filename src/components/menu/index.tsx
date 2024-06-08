import { Menu, MenuItem } from "@/data/types";
import styles from "./menu.module.css";

type PropTypes = {
  data: Menu;
}
export const MenuComponent = ({data}: PropTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        {data.map((item, index) => (
          <MenuItemComponent key={index}
            href={item.href}
            title={item.title}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItemComponent = ({href, title, isActive }: MenuItem) => {
    if (isActive) {
      return(
    <a href = {href} className={styles.link}>
      {title}  
    </a>
      )} else {}
  };