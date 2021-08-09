import styled from 'styled-components';
import theme from '../../theme';

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 350;
  margin: 0 0 0 8px;
  color: ${theme.Terciary};
  cursor: pointer;
`;

export const FormWrapper = styled.form`
  padding: 2rem;
  min-width: 31rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Separator = styled.div`
  border-top: 3px dotted #bbb;
`;
