import React from 'react';
import styles from './CardList.module.css';

function CardList({children, title}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
        {children}
    </div>
  )
}

export default CardList