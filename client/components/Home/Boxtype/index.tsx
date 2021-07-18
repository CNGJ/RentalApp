import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { WrapperBoxType, ContainerTypes, Icon, Link, Building, Home, Room, Cabana, Campo } from './style';

const options = [
  { label: 'Apartamentos', icon: <Building /> },
  { label: 'Casas', icon: <Home /> },
  { label: 'Habitaciones', icon: <Room /> },
  { label: 'Cabañas', icon: <Cabana /> },
  { label: 'Campo', icon: <Campo /> }
];

const Boxtype: FC<any> = () => {
  return (
    <WrapperBoxType>
      <ContainerTypes>
        {options.map((option, i) => (
          <Icon key={uuidv4()} isLast={i % 2 === 0}>
            {option.icon}
            <Link>{option.label}</Link>
          </Icon>
        ))}
      </ContainerTypes>
    </WrapperBoxType>
  );
};

export default Boxtype;
