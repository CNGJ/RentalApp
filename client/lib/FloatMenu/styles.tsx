import styled from "styled-components";
import { theme } from "../../theme";

export const FloatMenuContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: white;
  background-color: ${theme.White};
  top: 50px;
  padding: 0.5rem;
  font-size: 1rem;
  left: -25px;
  border-radius: 0.5rem;
  width: 15rem;
  z-index: 2;
`;
