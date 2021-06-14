import styled from 'styled-components';
import theme from '../../theme';

export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 1rem auto;
  color: ${theme.Primary};

  // &::after {
  //   content: '${({ icon }) => icon}';
  //   position: absolute;
  // }
`;

export const SpanTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.1;
  margin: 1rem auto;
  color: ${theme.Terciary};
`;

export const WrapperHome = styled.div<{ column: boolean }>`
  display: flex;
  ${props =>
    props.column
      ? `flex-direction: column;
  align-items: center;`
      : 'justify-content: center;'};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const SubTitle = styled.p<{
  red: boolean;
  bold: boolean;
  opacity: boolean;
}>`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  opacity: ${props => (props.opacity ? '0.5' : '1')};
  font-weight: ${props => (props.bold ? '450' : '300')};
  padding: 0;
  color: ${props => (props.red ? theme.Red : theme.Primary)};
`;

export const TitleIcon = styled.div`
  width: 2rem;
  color: ${theme.Red};
  margin-left: 0.5rem;
`;

export const WrapperType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-size: contain;
  background: url(${props => props.imgUrl});
  // background: #FFD581;
  padding-bottom: 0rem;
  padding-top: 10rem;
`;

export const WrapperCards = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

export const SubTitleCards = styled.p`
  font-size: 26px;
  font-weight: 300;
  margin: 0 0 0 8px;
  color: #666;
`;
