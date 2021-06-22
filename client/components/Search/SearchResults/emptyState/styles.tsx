import style from 'styled-components';
import theme from '../../../../theme';

export const WrapperEmpty = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;

`;

export const TitleEmpty = style.h1`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.1;
  margin: 1rem auto;
  margin-bottom: 2rem;
  color: ${theme.Primary};
`;
