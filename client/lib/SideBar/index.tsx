import React, { useState, useEffect, FC } from 'react';
import { SideWrapper, BackdropWrap, Title } from './styles';

const Backdrop = ({ show, clicked }) => (show ? <BackdropWrap onClick={clicked}></BackdropWrap> : null);

const SideBar: FC<any> = ({ children, show, title, setShowModal }) => {
  const [state, setstate] = useState(show);

  useEffect(() => {
    setstate(show);
  }, [show]);

  const SideClosed = e => {
    e.preventDefault();
    setstate(!state);
    setShowModal(!state);
  };

  return (
    <>
      <Backdrop show={state} clicked={SideClosed}></Backdrop>
      <SideWrapper
        style={{
          transform: state ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: state ? 1 : 0
        }}
      >
        <Title> {title} </Title>
        {children}
      </SideWrapper>
    </>
  );
};

export default SideBar;
