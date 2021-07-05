import styled, { keyframes } from 'styled-components';
import { GlobeIcon } from '@heroicons/react/outline';
import theme from '../../theme';

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Track = styled.div`
  position: absolute;
  z-index: 1;
  top: 36rem;
  left: -10rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 1px dashed;
`;

export const TrackTwo = styled.div`
  position: absolute;
  z-index: 1;
  top: 40rem;
  right: -12rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 1px dashed;
`;

const rotate = keyframes`
  0% {
    transform: rotate(20deg);    
  }

  100% {
    transform: rotate(-340deg);    
  }
`;

export const Circle = styled.div`
  position: absolute;
  z-index: 1;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  animation: ${rotate} 5s infinite linear;
`;

export const Point = styled(GlobeIcon)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 3.5rem;
  color: ${theme.Terciary};
  transform: translate(-50%, -50%);
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
