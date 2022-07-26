import React from 'react';
import styles from './BackDrop.module.css';

function Backdrop({onCancel}) {
  return (
    <div className={styles.backdrop} onClick={onCancel}></div>
  )
}

export default Backdrop