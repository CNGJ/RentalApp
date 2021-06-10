import styled from "styled-components";
import { theme } from "../../theme/index";

export const WrapperLogout = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const QuestionLogout = styled.div`
  text-align: center;
`;

export const ButtonsLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
`;

export const ConfirmationButton = styled.button<{ primary: boolean }>`
  height: 40px;
  width: 70px;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: ${theme.White};
  background: ${({ primary }) => (primary ? theme.Terciary : theme.Gray)};
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 6px -6px black;
  }
  :disabled {
    background: #cccccc;
    color: #ffffff;
    box-shadow: none;
  }
`;
