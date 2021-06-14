import React from "react";
import { FloatMenu } from "../../../lib/FloatMenu/index";
import { ProfileMenuItem, ProfileMenuSeparator } from "./styles";

export const ProfileMenu = () => {
  return (
    <FloatMenu>
      <div>
        <ProfileMenuItem style={{ color: "black" }}>Mi cuenta</ProfileMenuItem>
        <ProfileMenuItem style={{ color: "black" }}>
          Configuracion
        </ProfileMenuItem>
        <ProfileMenuSeparator />
        <ProfileMenuItem style={{ color: "black" }}>Pindonga</ProfileMenuItem>
      </div>
    </FloatMenu>
  );
};
