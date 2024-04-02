import React, {
  PropsWithChildren, useEffect, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import {
  closeButtonClass, contentClass, dialogClass, footerClass, headerClass,
  titleClass,
} from './Modal.css';

type ModalProps = {
  isOpen: boolean,
  title: string,
  onClose: () => void,
};

function Modal(props: PropsWithChildren<ModalProps>) {
  const {
    children, isOpen, onClose, title,
  } = props;
  const buildTime = typeof document === 'undefined'; // Needed as document variable is not
  // known at build time.
  const modalContainer = !buildTime ? document.getElementById('main-container') : null;
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return modalContainer && isOpen && createPortal(
    <dialog className={dialogClass} aria-label={title} ref={modalRef}>
      <div className={headerClass}>
        <h3 className={titleClass}>{title}</h3>
      </div>
      <div className={contentClass}>
        {children}
      </div>
      <div className={footerClass}>
        <button className={closeButtonClass} onClick={onClose} type="button">
          Fermer
        </button>
      </div>
    </dialog>,
    modalContainer,
  );
}

export default Modal;
