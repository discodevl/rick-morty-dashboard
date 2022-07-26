import React from "react";
import styles from "./CardList.module.css";

function CardList({ children, title, main }) {
  return (
    <div className={`${styles.container} ${main && styles.main}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default CardList;
