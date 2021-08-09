import React, { FC } from 'react';
import styled from 'styled-components';

export interface LabelProps {
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  bgColor?: string;
  className?: string;
}

const PrimaryLabel = styled.p<LabelProps>`
  font-family: ${props => (props.fontFamily ? props.fontFamily : 'regular')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  color: ${props => (props.color ? props.color : 'grey')};
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`;

const SecundaryLabel = styled.p<LabelProps>`
  display: inline;
  margin-left: 4px;
  font-family: ${props => (props.fontFamily ? props.fontFamily : 'regular')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  color: ${props => (props.color ? props.color : 'black')};
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`;

const LabelComponente: FC<any> = ({ as, primaryText, primaryValues, secundaryText, secundaryValues }) => {
  return (
    <>
      <PrimaryLabel
        as={as}
        fontFamily={primaryValues.fontFamily}
        fontSize={primaryValues.fontSize}
        color={primaryValues.color}
      >
        {primaryText}
        {secundaryText && (
          <SecundaryLabel
            fontFamily={primaryValues.fontFamily}
            fontSize={primaryValues.fontSize}
            color={secundaryValues.color}
          >
            {secundaryText}
          </SecundaryLabel>
        )}
      </PrimaryLabel>
    </>
  );
};

export default LabelComponente;
