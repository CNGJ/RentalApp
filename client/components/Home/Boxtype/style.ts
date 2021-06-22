import styled from 'styled-components';
import theme from '../../../theme';

export const WrapperBoxType = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerTypes = styled.div`
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 6px -6px black;
`;

export const Icon = styled.div<{ isLast: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ isLast }) => (isLast ? theme.White : theme.Gray_font)};
  background-color: ${({ isLast }) => (isLast ? theme.Gray_font : theme.White)};
  margin: 0.5rem;
  width: 7rem;
  box-shadow: 0 8px 6px -6px black;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  height: 6rem;
  justify-content: center;

  :hover {
    color: ${theme.Terciary};
    transform: translateY(-5%);
  }

  transition: all 0.1s ease-in-out;
`;

export const Link = styled.div<{ placeholder?: string }>`
  font-size: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  margin-left: 5px;
  font-weight: 450;
`;

export const SpanIcon = styled.div`
  padding: 0.7rem;
  margin-right: 1rem;
  // border: 1px solid ${theme.Blue2};
  background: ${theme.Terciary};
  border-radius: 50%;
`;
