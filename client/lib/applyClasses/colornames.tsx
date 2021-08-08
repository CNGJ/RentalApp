import { FC } from 'react';

const classnames = require('classnames');

const DEFAULT_COLOR = false;

const namespace = 'ui-color';

const colornames: FC<any> = (color, className) => {
  const colorName = typeof color === 'string' ? color : (color && color.color) || DEFAULT_COLOR;
  return classnames({ [`${namespace}--${colorName}`]: colorName }, className);
};

export default colornames;
