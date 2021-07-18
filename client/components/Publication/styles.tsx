import styled from 'styled-components';
import theme from '../../theme';

export const WrapperCard = styled.div`
  flex: 1;
  max-width: 400px;
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
  box-shadow: 0px 4px 10px -4px black;
`;
