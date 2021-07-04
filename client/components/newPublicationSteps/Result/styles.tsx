import styled from 'styled-components';
import { CheckIcon } from '@heroicons/react/outline';
import theme from '../../../theme';

export const WrapperResult = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Check = styled(CheckIcon)`
  width: 4rem;
  color: ${theme.Green};
`;

export const ContainerButton = styled.div`
  width: 60%;
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.7rem;
  background-color: ${theme.Terciary};
  border: 1px solid ${theme.Terciary};
  color: ${theme.White};
  font-weight: 550;
  cursor: pointer;
  border-radius: 1rem;

  :hover {
    border: 1px solid ${theme.Terciary};
    background-color: ${theme.White};
    color: ${theme.Primary};
  }
  transition: all 250ms ease-in-out;
`;

export const WrapperDetail = styled.div`
  width: 60%;
  padding: 1rem;
`;

export const LineDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const PDetail = styled.p`
  margin: 0;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 1rem auto;
  margin-bottom: 2rem;
  color: ${theme.Primary};
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.1;
  margin: 1rem auto;
  color: ${theme.Primary};
`;
