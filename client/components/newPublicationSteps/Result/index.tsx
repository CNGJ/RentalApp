import React, { FC, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  WrapperResult,
  HomeTitle,
  Subtitle,
  WrapperDetail,
  LineDetail,
  PDetail,
  Button,
  ContainerButton
} from './styles';
import theme from '../../../theme';
import { PublicationContext } from '../../../Context/PublicationContext';

const FinalStepNewPublication: FC = () => {
  const { NewPublicationData } = useContext(PublicationContext);

  const { street, number, location, province } = NewPublicationData.location;

  return (
    <WrapperResult>
      <HomeTitle> Tu publicacion ha sido creada con exito </HomeTitle>

      <FontAwesomeIcon icon={faCheck} style={{ color: `${theme.Green}` }} size="5x" />

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
