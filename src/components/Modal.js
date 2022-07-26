import React from 'react';
import styles from './Modal.module.css';
import ReactDom from 'react-dom';

function Modal({character}) {
  return ReactDom.createPortal(
    <div className={styles.modal}>
        <div className={styles.modalDialog}>
          <h2>{character.name}</h2>
            <div className={styles.modalBody}>

            </div>
        </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal