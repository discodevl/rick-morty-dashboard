import React from 'react';
import styles from './CardList.module.css';

function CardList({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default CardList