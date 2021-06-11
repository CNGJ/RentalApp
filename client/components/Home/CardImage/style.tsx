import styled from "styled-components";
import { theme } from "../../../theme";

export const WrapperCard = styled.div`
  width: 18rem;
  display: inline-block;
  height: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.9rem;
  padding-bottom: 2rem;
  background: ${theme.White};
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const ImgCard = styled.img`
  width: 18rem;
  height: 13rem;
  border-radius: 1rem;
  padding-top: 0;
`;

export const Title = styled.p`
  font-size: 21px;
  font-weight: 300;
  margin: 0 0 0 8px;
  color: #666;
`;
