import styled from 'styled-components';
import { SearchIcon } from '@heroicons/react/outline';
import theme from '../../../theme';

export const WrapperSearchBox = styled.form`
  display:flex;  
  border: 1px solid ${theme.Secondary};
  border-radius: 2rem;
  align-items: center;
  justify-content: center
  height: 3rem;
  margin-left: 3rem;
  background: white;
  box-shadow: 0 8px 6px -6px black;
`;

export const InputBox = styled.div`
  padding: 0.55rem;
`;

export const Button = styled.button`
  border-radius: 40px;
  width: 3rem;
  height: 3rem;
  color: ${theme.Ligth};
  background: ${theme.Terciary};
  border: none;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    background: ${theme.Terciary};
  }

  :disabled {
    background-color: ${theme.Terciary_Op};
    color: ${theme.White};
    cursor: not-allowed;
  }
`;

export const OverlayBox = styled.div<{ content: any }>`
  position: relative;

  ::after {
    content: ${({ content }) => content};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: green;
  }
`;

export const Search = styled(SearchIcon)`
  width: 1.5rem;
`;
