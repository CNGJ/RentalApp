import { FC } from 'react';

const DEFAULT_SIZE = false;

const classnames = require('classnames');

const namespace = 'ui-size';

const sizenames: FC<any> = (size, className) => {
  const sizeName = typeof size === 'string' ? size : (size && size.font_size) || DEFAULT_SIZE;
  return classnames({ [`${namespace}--${sizeName}`]: sizeName }, className);
};

export default sizenames;
