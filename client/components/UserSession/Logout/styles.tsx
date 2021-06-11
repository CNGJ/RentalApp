import styled from "styled-components";
import { theme } from "../../../theme/index";

export const WrapperLogout = styled.div`
  padding: 25px;
`;

export const QuestionLogout = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  margin: 0 0 0 8px;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
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
  font-size: 1rem;
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
