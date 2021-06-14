import React from 'react';
import { FloatMenuContainer } from './styles';

interface MenuInfo {
  children: JSX.Element;
}
const FloatMenu = ({ children }: MenuInfo) => {
  return <FloatMenuContainer>{children}</FloatMenuContainer>;
};

export default FloatMenu;
