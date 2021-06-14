import styled from 'styled-components';
import theme from '../../theme';

export const WrapperRadioo = styled.div`
  margin: 10px 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  user-select: none;
`;

export const RadioOuter = styled.div`
  width: 2rem;
  height: 2rem;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid ${theme.Terciary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  transition: all 0.1s linear;

  ${({ selected }) => selected && 'border: 2px solid #666;'}
`;

export const RadioInner = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${theme.Terciary};
  transition: all 0.1s linear;

  ${({ selected }) => selected && ' width: 0;height: 0;'}
`;

export const Label = styled.div`
  color: #666;
  padding-right: 8px;
`;
