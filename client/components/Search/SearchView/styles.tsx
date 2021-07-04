import styled from 'styled-components';
import theme from '../../../theme';

export const WrapperSearchView = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperResults = styled.div`
  width: 45%;
  height: 100vh;
  margin-top: 7rem;
  padding: 1rem;
`;

export const WrapperMap = styled.div<{ imgUrl: any }>`
  width: 53%;
  border: 1px solid;
  border-radius: 1rem;
  background: black;
  height: 100vh;
  position: fixed;
  right: 0;
  background: url(${props => props.imgUrl});
`;
