import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperBoxType = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerTypes = styled.div`
  border: 1px solid ${theme.Secondary};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 8px 6px -6px black;
`;

export const Icon = styled.div<{ isLast: boolean }>`
  padding: 1.2rem;
  cursor: pointer;
  color: black;
  // ${(props) => !props.isLast && "border-right: 0.5px solid black"};

  :hover {
    color: ${theme.Terciary};
    // background-color: ${theme.Terciary}
    // border: 1px solid ${theme.Red};
  }
`;

export const Link = styled.div<{ placeholder: string }>`
  font-size: 1rem;
  line-height: 1.5;
  margin-left: 5px;
  font-weight: 400;
`;

export const SpanIcon = styled.span`
  padding: 0.7rem;
  margin-right: 1rem;
  // border: 1px solid ${theme.Blue2};
  background: ${theme.Terciary};
  border-radius: 50%;
`;
