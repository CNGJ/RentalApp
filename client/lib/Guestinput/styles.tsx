import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperInput = styled.div`
  position: relative;
`;

export const WrapperCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: ${theme.Primary};
  font-size: 16px;
  letter-spacing: 0px;
  cursor: pointer;
  ::before {
    position: absolute;
    content: " ";
    top: 30px;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.Primary};
    transition: transform 150ms ease-in-out;
    transform: scaleX(0);
    background-position: center;
    z-index: 2;
  }
  :hover::before {
    transition: transform 150ms ease-in-out;
    transform: scaleX(1.3);
  }
`;

export const TitleCounter = styled.p`
  color: ${theme.Primary};
  font-size: 16px;
  letter-spacing: 0px;
`;

export const CounterButton = styled.button<{ plus: boolean }>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${theme.Ligth};
  background: ${({ plus }) => (plus ? theme.Terciary : theme.Red)};
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

export const CounterInfo = styled.div`
  display: flex;
  width: 6rem;
  margin-left: 1rem;
  justify-content: space-between;
`;

export const CounterButtons = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
`;
