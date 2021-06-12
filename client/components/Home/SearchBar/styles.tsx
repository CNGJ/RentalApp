import styled from "styled-components";
import { theme } from "../../../theme";

export const WrapperSearchBox = styled.form`
  display:flex;  
  border: 1px solid ${theme.Secondary};
  border-radius: 2rem;
  align-items: center;
  justify-content: center
  height: 3rem;
  margin-left: 3rem;
  background: white;
  box-shadow: 0 8px 6px -6px black;
`;

export const InputBox = styled.div`
  padding: 0.55rem;
`;

export const Button = styled.button`
  padding: 1.2rem;
  border-radius: 40px;
  width: 3.4rem;
  color: ${theme.Ligth};
  background: ${theme.Terciary};
  border: none;
  cursor: pointer;

  :hover {
    background: ${theme.Orange};
  }

  :disabled {  
  background-color: ${theme.Orange_Opacity};
  color: ${theme.Gray};
  cursor: not-allowed;
}
`;

export const OverlayBox = styled.div<{ content: JSX.Element }>`
  position: relative;

  ::after {
    content: ${({ content }) => content};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: green;
  }
`;
