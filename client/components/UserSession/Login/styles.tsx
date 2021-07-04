import styled from 'styled-components';
import { UserIcon, PencilAltIcon } from '@heroicons/react/outline';
import theme from '../../../theme';

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 350;
  margin: 0 0 0 8px;
  color: ${theme.Terciary};
  cursor: pointer;
`;

export const Title = styled.p``;

export const FormWrapper = styled.form`
  padding: 2rem;
  min-width: 31rem;
`;

export const Button = styled.button`
  justify-content: center;
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 2rem;
  margin-top: 1rem;
  background: ${theme.Terciary};
  font-size: 15px;
  color: ${theme.White};
  cursor: pointer;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const User = styled(UserIcon)`
  width: 1.5rem;
`;

export const UserEdit = styled(PencilAltIcon)`
  width: 1.5rem;
`;