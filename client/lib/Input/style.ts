import styled from 'styled-components';
import theme from '../../theme';

export default styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px 4px 0px 0px;
  position: relative;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  transition: all 250ms ease-in-out;
  outline: none;
  color: black;
  font-size: 16px;
  letter-spacing: 0px;
  border: none;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:focus {
    border: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputContainer = styled.div<{
  disabled;
  placeholder;
  hasValue;
  width;
  marginB;
}>`
  background-color: ${({ disabled }) => (disabled ? '#dadada' : '#ffffff')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  max-width: 100%;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  position: relative;
  border-radius: 4px 4px 0 0;
  margin-bottom: ${({ marginB }) => (marginB ? `${marginB}px` : '1.4rem')};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px;
  &::before {
    position: absolute;
    content: ' ';
    height: 1px;
    width: 100%;
    background: ${theme.Terciary};
    bottom: 0;
    left: 0;
    transition: transform 150ms ease-in-out;
    transform: scaleX(0);
    background-position: center;
    z-index: 2;
  }
  &:focus-within::before {
    transition: transform 150ms ease-in-out;
    transform: scaleX(1);
  }
  &::after {
    content: '${({ placeholder }) => placeholder}';
    position: absolute;
    left: 49px;
    top: 13px;

    color: ${({ hasValue }) => (hasValue ? 'rgb(143, 143, 143);' : theme.Primary)};

    font-size: 16px;
    font-weight: 450;
    color: #666;
    letter-spacing: 0px;
    transition: transform 150ms ease-in-out;
    transform: ${({ hasValue }) => (hasValue ? 'translate(-13%, -12px) scale(0.75);  ' : '')};
  }
  &:focus-within::after {
    transition: transform 150ms ease-in-out;
    transform: translate(-13%, -12px) scale(0.75);
  }
  &:focus-within {
    input {
      padding: 1.1875rem 1rem 0.4375rem 1rem;
    }
  }
  input {
    padding: ${({ hasValue }) => (hasValue ? '1.1875rem 1rem 0.4375rem 1rem' : '0.8125rem 1rem')};
  }
`;

export const FieldMessageWrapper = styled('div')<{ type: 'help' | 'error' }>`
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 100;
  line-height: 1.75;
  letter-spacing: 0.09px;
  border: 2px solid rgb(187, 186, 186);
  color: ${({ type }) => (type === 'error' ? '#ec0000' : '#444')};
  background-color: inherit;
  font-weight: 200;
  border: 0;
  outline: 0;
  position: absolute;
  user-select: none;
  width: 97.5%;
  height: 25px;
  top: 102%;

  padding-left: 10px;
  order: 3;
  text-align: start;
  padding-left: 10px;
`;
