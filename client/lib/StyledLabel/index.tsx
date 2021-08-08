import React, { FC } from 'react';
import applyclasses from '../applyClasses/apply-classes';

export interface LabelProps {
  as: any;
  bgColor: string;
  className: string;
  text: string;
  color: string;
  fontFamily: string;
  fontSize: string;
}

export const initialProps: LabelProps = {
  as: 'p',
  bgColor: null,
  className: null,
  text: null,
  color: null,
  fontFamily: 'REGULAR',
  fontSize: null
};

const ModalProvider: FC<any> = ({ text, fontSize, fontFamily, alignment, color, bgColor, className }) => {
  const Element = initialProps.as;

  const classes = applyclasses({
    size: fontSize,
    family: fontFamily,
    alignment,
    color,
    bgColor,
    className
  });

  return <Element className={classes}>{text}</Element>;
};

export default ModalProvider;
