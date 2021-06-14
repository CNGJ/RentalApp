import React, { useState, useEffect } from 'react';
import { ModalWrapper, BackdropWrap, Title } from './styles';

const Backdrop = ({ show, clicked }) => (show ? <BackdropWrap onClick={clicked}></BackdropWrap> : null);

const Modal = ({ children, show, title, setShowModal }) => {
  const [state, setstate] = useState(show);

  useEffect(() => {
    setstate(show);
  }, [show]);

  const modalClosed = e => {
    e.preventDefault();
    setstate(!state);
    setShowModal(!state);
  };

  return (
    <>
      <Backdrop show={state} clicked={modalClosed}></Backdrop>
      <ModalWrapper
        style={{
          transform: state ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: state ? 1 : 0
        }}
      >
        <Title> {title} </Title>
        {children}
      </ModalWrapper>
    </>
  );
};

export default Modal;
