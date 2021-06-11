import React, { useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { ProfileContext } from "../../../Context/ProfileContext";
import {
  ConfirmationButton,
  WrapperLogout,
  QuestionLogout,
  ButtonsLogout,
} from "./styles";

export const Logout = () => {
  const { refetch } = useContext(ProfileContext);
  const { ToastInfo, setShowModal, showModal } = useContext(ModalContext);

  const logoutConfrimation = () => {
    localStorage.removeItem("travel-token");
    setShowModal(!showModal);
    refetch();
    ToastInfo("Has finalizado sesion");
  };

  const logoutDenied = () => {
    setShowModal(!showModal);
  };

  return (
    <WrapperLogout>
      <QuestionLogout>¿Desea cerrar sesión en la aplicación?</QuestionLogout>
      <ButtonsLogout>
        <ConfirmationButton onClick={() => logoutDenied()}>
          No
        </ConfirmationButton>
        <ConfirmationButton primary onClick={() => logoutConfrimation()}>
          Si
        </ConfirmationButton>
      </ButtonsLogout>
    </WrapperLogout>
  );
};
