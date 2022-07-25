import React from 'react'
import styles from './ListItem.module.css';

function ListItem({children, onClick}) {
  return (
    <div className={styles.itemContainer} onClick={onClick}>{children}</div>
  )
}

export default ListItem