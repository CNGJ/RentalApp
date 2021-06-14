import styled from "styled-components";
import { theme } from "../../../theme";

export const ProfileMenuItem = styled.div`
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  :hover {
    background-color: ${theme.Gray_Opcity};
    // background-color: ${theme.Terciary}
    // border: 1px solid ${theme.Red};
  }
`;

export const ProfileMenuSeparator = styled.hr`
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
`;
