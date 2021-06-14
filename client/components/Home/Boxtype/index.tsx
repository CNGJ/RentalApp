import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faHome, faCampground, faBuilding, faMountain, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WrapperBoxType, ContainerTypes, Icon, Link, SpanIcon } from './style';
import theme from '../../../theme';

const options = [
  { label: 'Apartamentos', icon: faBuilding },
  { label: 'Casas', icon: faHome },
  { label: 'Habitaciones', icon: faBed },
  { label: 'Cabañas', icon: faCampground },
  { label: 'Campo', icon: faMountain }
];

const Boxtype = () => {
  return (
    <WrapperBoxType>
      <ContainerTypes>
        {options.map((option, i) => (
          <Icon key={uuidv4()} isLast={i % 2 === 0}>
            <FontAwesomeIcon
              icon={option.icon}
              style={{ color: `${i % 2 === 0 ? theme.White : theme.Gray_font}` }}
              size="lg"
            />
            <Link>{option.label}</Link>
          </Icon>
        ))}
      </ContainerTypes>
    </WrapperBoxType>
  );
};

export default Boxtype;
