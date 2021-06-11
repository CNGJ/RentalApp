import styled from "styled-components";
import { theme } from "../../../theme";

export const DataContainer = styled.form`
  padding: 1rem;
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 10px 8px;
  margin-bottom: 2rem;
  color: #666;
`;

export const WrapperCounters = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const WrapperFeatures = styled.div`
  margin-top: 2rem;
`;

export const WrapperPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.1;
  margin: 0;
  color: ${theme.Primary};
  margin-right: 5rem;
  text-align: right;
`;

export const FinalPrice = styled.p`
  color: ${theme.Terciary};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.1;
  margin: 0;
  margin-right: 5rem;
  color: ${theme.Primary};
  text-align: center;
`;
