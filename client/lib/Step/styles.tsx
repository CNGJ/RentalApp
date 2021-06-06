import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperStep = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StepContainer = styled.div`
  width: 50%;
  padding: 2rem;
  border-radius: 0.5rem;
  height: 48vh;
  background: #ffff;
  box-shadow: -5px 8px 8px -6px black;
  margin-top: 4rem;

  @media (max-width: 1600px) {
    height: 70vh;
    width: 60%;
    margin-top: 0px;
  }
`;

export const Title = styled.p`
  font-size: 23px;
  font-weight: 450;
  margin: 0 0 0 8px;
  margin-bottom: 2rem;
  color: #666;
`;

export const ContainerButtonOut = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 50%;
  justify-content: ${({ first }) => (first ? "flex-end" : "space-between")};

  @media (max-width: 1600px) {
    width: 60%;
  }
`;

export const Button = styled.button`
  justify-content: center;
  width: 15%;
  padding: 0.8rem;
  border: none;
  border-radius: 2rem;
  margin-top: 0.5rem;
  background: ${theme.Terciary};
  font-size: 15px;
  color: ${theme.White};
  cursor: pointer;
  font-weight: 300;
  box-shadow: -2px 8px 6px -6px black;

  :disabled {
    background: #cccccc;
    color: #ffffff;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
