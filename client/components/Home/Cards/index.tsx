import React from 'react';
import {
  WrapperCard,
  CardType,
  CardTitle,
  ImgCard,
  CardPrice,
  Chip,
  CardAmount,
  ContainerDetails,
  Barrio
} from './styles';

const Card = () => {
  return (
    <>
      <WrapperCard>
        <Barrio>Palermo</Barrio>
        <CardType>Apartamento</CardType>

        <CardTitle>Alquilo apartamento en bella zona centrica en palermo</CardTitle>

        <ImgCard src="/house1.jpg" alt="Picture of the author" />
        <ContainerDetails>
          <CardPrice>Precio por noche:</CardPrice>
          <CardAmount> $ 1000.85 </CardAmount>
        </ContainerDetails>
        <ContainerDetails>
          <CardPrice> Direccion </CardPrice>
          <CardAmount small> Charcas 4181 </CardAmount>
        </ContainerDetails>
        <div style={{ marginBottom: '0.5rem' }}>
          <Chip> Completa </Chip>
          {/* <Chip color={"1"}> Flexibilidad para cancelar </Chip> */}
        </div>
        {/* <ContainerDetails>
          <CardPrice>Propietario: Christian</CardPrice>
          <CardAmount small> Nuevo Dueño </CardAmount>
        </ContainerDetails> */}
      </WrapperCard>
    </>
  );
};

export default Card;
