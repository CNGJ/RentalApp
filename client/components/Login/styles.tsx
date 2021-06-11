import styled from "styled-components";
import { theme } from "../../theme";

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 350;
  margin: 0 0 0 8px;
  color: ${theme.Terciary};
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 26px;
  font-weight: 300;
  margin: 0 0 0 8px;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.form`
  padding: 1rem;
  margin-right: 3rem;
  margin-left: 3rem;
`;

export const Button = styled.button`
  justify-content: center;
  width: 50%;
  padding: 0.8rem;
  border: none;
  border-radius: 2rem;
  margin-top: 1rem;
  background: ${theme.Terciary};
  font-size: 15px;
  color: ${theme.White};
  cursor: pointer;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  padding: 25px;
`;
