import React from 'react';
import styles from './Modal.module.css';
import ReactDom from 'react-dom';

function Modal(props) {
  return ReactDom.createPortal(
    <div className={styles.modal}>
        <div className={styles.modalDialog}>
            <div className={styles.modalBody}>{props.children}</div>
        </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal