import styled from "styled-components";
import { theme } from "../../../theme";

export const WrapperCard = styled.div`
  width: 16rem;
  display: inline-block;
  height: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.9rem;
  padding-bottom: 0.5rem;
  background: ${theme.White};
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const CardType = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 9px;
  margin-top: 5px;
  color: #808080;
  font-weight: 300;
`;

export const CardTitle = styled.p`
  font-size: 17px;
  font-weight: 350;
  line-height: 1.1;
  margin: 1rem auto;
  color: ${theme.Primary};
  padding: 0.5rem;
`;

export const ImgCard = styled.img`
  width: 15rem;
  height: auto;
  border-radius: 1rem;
  padding: 0.5rem;
  padding-top: 0;
`;

export const CardAddress = styled.p`
  font-size: 17px;
  font-weight: 350;
  line-height: 1.1;
  color: ${theme.Primary};
  margin: 0;
  margin-left: 0.5rem;
`;

export const SpanAdress = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  color: ${theme.Primary};
  margin: 0;
`;

export const CardPrice = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.1;
  color: ${theme.Primary};
  margin: 0;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CardAmount = styled.p<{ small: boolean }>`
  color: #333;
  font-size: ${({ small }) => (small ? "14" : "24")}px;
  font-weight: 350;
  line-height: 1.25;
  color: ${theme.Primary};
  margin: 0;
  margin-right: 0.5rem;
`;

export const Chip = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.1rem;
  margin-left: 0.5rem;  
  font-weight: 300;
  font-size: 14px;
  background: ${({ color }) => {
    switch (color) {
      case "1":
        return theme.Primary;
      case "2":
        return theme.Orange;
      default:
        return theme.White;
    }
  }};
  color: ${theme.Terciary};
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Barrio = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 300;
  background: ${theme.Terciary};
  color: ${theme.White};
  padding: 0.2rem;
  padding-left: 1rem;
  border-top-right-radius: 0.8rem;
  border-bottom-left-radius: 1rem;
  box-shadow: 0 8px 6px -6px black;
`;
