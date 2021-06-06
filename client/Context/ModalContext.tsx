import React, { createContext, FC, useState } from "react";
import { Modal } from "../lib/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  infoModal?: InfoModal;
  setInfoModal: (param?: InfoModal) => void;
  ToastError: (msg: string) => void;
  ToastSuccess: (msg: string) => void;
  ToastInfo: (msg: string) => void;
}

export const initialProps: ContextPropsModal = {
  showModal: false,
  setShowModal: null,
  infoModal: {},
  setInfoModal: null,
  ToastError: null,
  ToastSuccess: null,
  ToastInfo: null,
};

const ModalContext = createContext(initialProps);

const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = useState(initialProps.showModal);
  const [infoModal, setInfoModal] = useState<InfoModal>(initialProps.infoModal);
  // const [children, setchildren] = useState<JSX.Element>(null)
  const ToastError = (msg: string) =>
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const ToastSuccess = (msg: string) =>
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const ToastInfo = (msg: string) =>
    toast.info(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        infoModal,
        setInfoModal,
        ToastError,
        ToastSuccess,
        ToastInfo,
      }}
    >
      {children}
      <Modal
        // icon={infoModal?.icon}
        show={showModal}
        title={infoModal?.title}
        setShowModal={setShowModal}
        // onClose={() => setShowModal(false)}
        // open={showModal}
        // {...infoModal}
      >
        {infoModal?.children || ""}
      </Modal>
      <ToastContainer />
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;
