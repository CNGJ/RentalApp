import React from "react";
import { WrapperBoxType, ContainerTypes, Icon, Link, SpanIcon } from "./style";
import { v4 as uuidv4 } from "uuid";
import {
  faHome,
  faCampground,
  faBuilding,
  faMountain,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../../theme";

const options = [
  { label: "Apartamentos", icon: faBuilding },
  { label: "Casas", icon: faHome },
  { label: "Habitaciones", icon: faBed },
  { label: "Cabañas", icon: faCampground },
  { label: "Campo", icon: faMountain },
];

export const Boxtype = () => {
  return (
    <WrapperBoxType  >
      <ContainerTypes>
        {options.map((option, i) => (
          <Icon key={uuidv4()} isLast={options.length === i + 1}>
            <Link>
              <SpanIcon>
                <FontAwesomeIcon
                  icon={option.icon}
                  style={{ color: `${theme.White}` }}
                />
              </SpanIcon>
              {option.label}
            </Link>
          </Icon>
        ))}
      </ContainerTypes>
    </WrapperBoxType>
  );
};
