import styled from 'styled-components';
import theme from '../../theme';

export const WrapperStep = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StepContainer = styled.div`
  width: 50%;
  padding: 2rem;
  border-radius: 0.5rem;
  height: 50vh;
  background: #ffff;
  box-shadow: -5px 8px 8px -6px black;
  overflow-y: scroll;
  margin-top: 3rem;

  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: ${theme.Gray_Opcity}; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.Terciary_Op}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid ${theme.Terciary_Op}; /* creates padding around scroll thumb */
  }

  @media (max-width: 1600px) {
    height: 75vh;
    width: 60%;
    margin-top: 0px;
  }
`;

export const Title = styled.p`
  font-size: 23px;
  font-weight: 450;
  margin: 0 0 0 8px;
  margin-bottom: 1rem;
  color: #666;
`;

export const ContainerButtonOut = styled.div<{ first: boolean }>`
  display: flex;
  margin-top: 1rem;
  width: 50%;
  justify-content: ${({ first }) => (first ? 'flex-end' : 'space-between')};

  @media (max-width: 1600px) {
    width: 60%;
  }
`;

export const Button = styled.button`
  justify-content: center;
  width: 15%;
  padding: 0.8rem;
  border: none;
  border-radius: 2rem;
  margin-top: 0.5rem;
  background: ${theme.Terciary};
  font-size: 15px;
  color: ${theme.White};
  cursor: pointer;
  font-weight: 300;
  box-shadow: -2px 8px 6px -6px black;

  :disabled {
    background: #cccccc;
    color: #ffffff;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  width: 90%;
  height: 70%;
  justify-content: center;
  align-items: center;
`;
