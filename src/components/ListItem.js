import React from 'react'
import styles from './ListItem.module.css';

function ListItem({children}) {
  return (
    <div className={styles.itemContainer}>{children}</div>
  )
}

export default ListItem