import styled from 'styled-components';
import theme from '../../theme';

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${theme.White};
  margin-bottom: 3rem;
  padding: 1rem;
`;

export const ContainerInfo = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgInfo = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 1rem;
  padding-top: 0;
`;

export const TitleInfo = styled.h2`
  text-align: center;
`;

export const Info = styled.p`
  margin: 0;
  margin-left: 3rem;
  margin-right: 3rem;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;
