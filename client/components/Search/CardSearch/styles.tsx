import styled from 'styled-components';
import theme from '../../../theme';

export const WrapperCard = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background: ${theme.White};
  position: relative;
  display: flex;
  box-shadow: 0 5px 7px -6px black;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 6px -6px black;
  }
  transition: all 0.3s ease-in-out;
`;

export const Fav = styled.div`
  top: 0;
  right: 10px;
  padding: 0.2rem;
  font-weight: 500;
  margin: 0 0 0 8px;
  letter-spacing: 0.5px;
  color: ${theme.Terciary};
  cursor: pointer;
  position: absolute;
`;

export const Price = styled.div`
  bottom: 0;
  right: 10px;
  padding: 0.2rem;
  letter-spacing: 0.5px;
  font-size: 20px;
  position: absolute;
  font-weight: 350;
  line-height: 1.25;
  color: ${theme.Primary};
  margin: 0;
  margin-right: 0.5rem;
`;

export const Score = styled.div`
  bottom: 0;
  left: 10px;
  padding: 0.2rem;
  letter-spacing: 0.5px;
  font-size: 25px;
  position: absolute;
  font-weight: 350;
  line-height: 1.25;
  color: ${theme.Primary};
  margin: 0;
`;

// export const Description = styled.p`
//   display: block;
//   display: -webkit-box;
//   max-width: 800px;
//   margin: 0 auto;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   font-size: 14px;
//   font-weight: 350;
//   color: #666;
// `;

export const ImgCard = styled.img`
  width: 13rem;
  height: 9rem;
  border-radius: 0.3rem;
  padding: 0.1rem;
  padding-top: 0;
`;

export const Title = styled.h1`
  font-size: 13px;
  font-weight: 450;
  margin: 8px 0 0 8px;
  color: ${theme.Primary};
`;

export const Type = styled.h3`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  margin-left: 0.5rem;
  color: ${theme.Terciary};
`;

export const WrapperIcons = styled.div`
  display: flex;
  color: ${theme.Terciary};
  width: 80%;
  padding: 1rem;
  justify-content: space-around;
`;

export const SpanIcons = styled.span`
  color: ${theme.Primary};
  font-weight: 600;
  font-size: 13px;
  margin-right: 3px;
`;

export const WrapIconSpan = styled.div<{ tooltip: string }>`
  display: flex;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.2rem;
  position: relative;
  &:hover::after {
    content: '${({ tooltip }) => tooltip}';
    position: absolute;
    top: 100%;
    font-size: 12px;
    left: -20px;
    right: 0;
    width: 5rem;
    font-weight: 350;
    color: ${theme.Primary};
    margin-top: 5px;
    background: ${theme.White};
    border: 1px solid ${theme.Terciary};
    border-radius: 0.3rem;
    padding: 0.2rem;
    text-align: center;
  }
`;
