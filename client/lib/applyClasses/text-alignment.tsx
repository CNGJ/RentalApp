import { FC } from 'react';

const classnames = require('classnames');

const namespace = 'ui-text-alignment';

const textAlignment: FC<any> = (alignment, className) => {
  return classnames({ [`${namespace}--${alignment}`]: alignment }, className);
};

export default textAlignment;
