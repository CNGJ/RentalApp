import { FC } from 'react';

const classnames = require('classnames');

const DEFAULT_FAMILY = false;

const namespace = 'ui-family';

const familynames: FC<any> = (family, className) => {
  const familyName = typeof family === 'string' ? family : (family && family.font_family) || DEFAULT_FAMILY;
  return classnames({ [`${namespace}--${familyName}`]: familyName }, className);
};

export default familynames;
