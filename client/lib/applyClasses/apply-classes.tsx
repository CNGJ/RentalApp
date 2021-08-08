import { FC } from 'react';

import sizenames from './sizenames';
import colornames from './colornames';
import familynames from './familynames';
import backgroundColor from './background-color';
import textAlignment from './text-alignment';

const applyClasses: FC<any> = ({ alignment, size, family, color, bgColor, className }) =>
  textAlignment(
    alignment,
    backgroundColor(bgColor, colornames(color, sizenames(size, familynames(family, className))))
  );

export default applyClasses;
