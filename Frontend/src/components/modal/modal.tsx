import React, { useEffect } from 'react'
import styles from './modal.module.scss';
import clsx from 'clsx';

interface ModalProps {
  children: React.ReactNode;
  active?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    if(props.active) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [props.active]);

  if(!props.active) {
    return <></>
  }
  return (
    <>
      <div className={styles.backdrop} onClick={() => {
        if(props.onClose) {
          props.onClose();
        }
      }} />
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  )
}

interface ModalContentProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const position = props.position || 'right';
  return (
    <>
      <div className={clsx(styles.content, {
        [styles.contentLeft]: position === 'left',
        [styles.contentRight]: position === 'right',
        [styles.contentBottom]: position === 'bottom',
        [styles.contentTop]: position === 'top',
      })}>
        {props.children}
      </div>
    </>
  )
}