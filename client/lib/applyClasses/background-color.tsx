import { FC } from 'react';

const classnames = require('classnames');

const DEFAULT_BG_COLOR = false;

const namespace = 'ui-background-color';

const backgroundColor: FC<any> = (bgColor, className) => {
  const colorName =
    typeof bgColor === 'string'
      ? bgColor
      : (bgColor && (bgColor.bgColor || bgColor.background_color)) || DEFAULT_BG_COLOR;
  return classnames({ [`${namespace}--${colorName}`]: colorName }, className);
};

export default backgroundColor;
