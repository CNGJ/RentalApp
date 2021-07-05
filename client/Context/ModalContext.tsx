import React, { createContext, FC, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import Modal from '../lib/Modal';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../theme';
import SideBar from '../lib/SideBar';

export interface InfoModal {
  children?: JSX.Element;
  title?: string;
  // icon?: {
  //   iconSize: string;
  //   iconKey: string;
  //   iconColor: string;
  // };
  // alignment?: string;
  // size?: string;
  // primaryText?: string;
  // onPrimary?: (value: obj) => void;
  // secondaryText?: string;
  // onSecondary?: (value: obj) => void;
}

export interface ContextPropsModal {
  showModal: boolean;
  setShowModal: (param: boolean) => void;
  setInfoModal: (param?: InfoModal) => void;
  infoModal?: InfoModal;
  showSide: boolean;
  setShowSide: (param: boolean) => void;
  infoSide?: InfoModal;
  setInfoSide: (param?: InfoModal) => void;
  showSpinner: boolean;
  setshowSpinner: (param: boolean) => void;
  ToastError: (msg: string) => void;
  ToastSuccess: (msg: string) => void;
  ToastInfo: (msg: string) => void;
}

export const initialProps: ContextPropsModal = {
  showModal: false,
  showSide: false,
  showSpinner: false,
  setShowModal: null,
  setShowSide: null,
  setInfoSide: null,
  setshowSpinner: null,
  infoModal: {},
  infoSide: {},
  setInfoModal: null,
  ToastError: null,
  ToastSuccess: null,
  ToastInfo: null
};

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 600;
  background-color: rgba(255, 255, 255, 0.6);
`;

const ModalContext = createContext(initialProps);

const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = useState(initialProps.showModal);
  const [showSide, setShowSide] = useState(initialProps.showSide);
  const [infoModal, setInfoModal] = useState<InfoModal>(initialProps.infoModal);
  const [infoSide, setInfoSide] = useState<InfoModal>(initialProps.infoSide);
  const [showSpinner, setshowSpinner] = useState(initialProps.showSpinner);
  // const [children, setchildren] = useState<JSX.Element>(null)
  const ToastError = (msg: string) =>
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });

  const ToastSuccess = (msg: string) =>
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });

  const ToastInfo = (msg: string) =>
    toast.info(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        setShowSide,
        showSide,
        setInfoSide,
        infoModal,
        setInfoModal,
        ToastError,
        ToastSuccess,
        ToastInfo,
        showSpinner,
        setshowSpinner
      }}
    >
      {children}
      <Modal show={showModal} title={infoModal?.title} setShowModal={setShowModal}>
        {infoModal?.children || ''}
      </Modal>
      <SideBar show={showSide} title={infoSide?.title} setShowModal={setShowSide}>
        {infoSide?.children || ''}
      </SideBar>
      {showSpinner && (
        <SpinnerContainer>
          <PuffLoader color={theme.Terciary} loading={showSpinner} size={100} />
        </SpinnerContainer>
      )}
      <ToastContainer />
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;
