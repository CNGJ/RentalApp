import React from "react";
import { FloatMenuContainer } from "./styles";

interface MenuInfo {
  children: JSX.Element;
}
export const FloatMenu = ({ children }: MenuInfo) => {
  return <FloatMenuContainer>{children}</FloatMenuContainer>;
};
