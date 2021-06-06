import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperFilters = styled.div`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
`;

export const Filter = styled.div`
  border: 1px solid ${theme.Gray};
  // background: ${theme.Secondary};
  width: 4rem;
  display: flex;
  padding: 1rem;
  margin-right: 0.2rem;
  cursor: pointer;
  color: ${theme.Primary};
  flex-direction: column;
  align-items: center;
  border-radius: 0.3rem;

  :hover {
    box-shadow: 0 8px 6px -6px black;
    color: ${theme.Terciary};
  }
`;

export const FilterTitle = styled.p`
  margin: 0;
  ${({ small }) => {
    small && "font-size: 10px;";
  }}
`;
