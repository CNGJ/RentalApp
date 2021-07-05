import React, { FC, useContext } from 'react';
import {
  WrapperResult,
  HomeTitle,
  Subtitle,
  WrapperDetail,
  LineDetail,
  PDetail,
  Button,
  Check,
  ContainerButton
} from './styles';
import { PublicationContext } from '../../../Context/PublicationContext';

const FinalStepNewPublication: FC = () => {
  const { NewPublicationData } = useContext(PublicationContext);

  const { street, number, location, province } = NewPublicationData.location;

  return (
    <WrapperResult>
      <HomeTitle> Tu publicacion ha sido creada con exito </HomeTitle>

      <Check />

      <Subtitle> numero de publicacion: 15878422587 </Subtitle>

      <Subtitle>Detalle de publicacion:</Subtitle>

      <WrapperDetail>
        <LineDetail>
          <PDetail>Titulo:</PDetail>
          <PDetail> {NewPublicationData.name} </PDetail>
        </LineDetail>
        <LineDetail>
          <PDetail>Precio:</PDetail>
          <PDetail> {NewPublicationData.price} </PDetail>
        </LineDetail>
        <LineDetail>
          <PDetail>Ubicacion:</PDetail>
          <PDetail>{`${province} ${location} ${street} ${number} `}</PDetail>
        </LineDetail>
      </WrapperDetail>

      <ContainerButton>
        <Button>Ir a la publicacion</Button>
      </ContainerButton>
    </WrapperResult>
  );
};

export default FinalStepNewPublication;
