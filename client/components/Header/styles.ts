import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperHeader = styled.div<{ fixed: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: solid 0.1px ${theme.Terciary};
  background: rgba(251, 247, 236, 0.2);

  ${(props) =>
    props.fixed &&
    `position: fixed;
     top: 0;
     width: 100%;
     z-index: 2;
     background: ${theme.Secondary};
     `}
`;

export const Title = styled.div`
  font-family: ;
`;

export const Icon = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: ${theme.Terciary};
    color: white;
  }
  ::after {
    content: "${({ tooltip }) => tooltip}";
    position: absolute;
    top: 80%;
    font-size: 13px;
    left: -25px;
    right: 0;
    width: 5rem;
    font-weight: 350;
    color: ${theme.Terciary};
    margin-top: 5px;
    // background: ${theme.White};
    // border: 1px solid ${theme.Terciary};
    border-radius: 0.3rem;
    padding: 0.2rem;
    text-align: center;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
`;
