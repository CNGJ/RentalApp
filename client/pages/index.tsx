/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Header from '../components/Home/Header';
import {
  HomeTitle,
  WrapperHome,
  SpanTitle,
  TitleContainer,
  SubTitle,
  WrapperType,
  WrapperCards,
  SubTitleCards
} from '../components/common/styles';
import Boxtype from '../components/Home/Boxtype';
import Card from '../components/Home/Cards';
import CardImage from '../components/Home/CardImage';
import {
  Circle,
  ContainerInfo,
  ImgInfo,
  Info,
  Point,
  TitleInfo,
  Track,
  TrackTwo,
  WrapperInfo,
  WrapperTitle
} from '../components/Home/styles';

import StyledLabel from '../lib/StyledLabel';
import i18n from '../lib/i18n';

export default function Home() {
  const namespace = 'ui-home';
  const title = {
    text: {
      text: 'Busquemos tu proximo alojamiento {componentText}',
      color: 'BLACK',
      font_size: 'MEDIUM',
      font_family: 'REGULAR',
      values: {
        componentText: {
          text: 'juntos',
          color: 'GREEN',
          font_size: 'MEDIUM',
          font_family: 'REGULAR'
        }
      }
    }
  };
  return (
    <>
      <Header />

      {/* <Track>
        <Circle>
          <Point></Point>
        </Circle>
      </Track> */}

      {/* <TrackTwo>
        <Circle>
          <Point></Point>
        </Circle>
      </TrackTwo> */}

      <WrapperHome>
        <TitleContainer>
          <StyledLabel
            className={`${namespace}__title`}
            as="p"
            fontFamily="REGULAR"
            fontSize="XSMALL"
            color="RED"
            text="Busquemos tu proximo alojamiento"
            // TODO terminar esto para que pueda dibujar 2 label en un mismo text
            // text={i18n.jsx("{Busquemos tu proximo alojamiento {componentText}", title.text.values)}
          />
        </TitleContainer>
      </WrapperHome>
      <WrapperHome column>
        {/* <SubTitle bold opacity>
          Gana dinero con ese espacio que no utilizas, hazte dueño.
        </SubTitle> */}
      </WrapperHome>
      <WrapperType>
        <Boxtype />
      </WrapperType>
      <WrapperTitle>
        <SubTitleCards>Encuentra lo ideal para vos</SubTitleCards>
      </WrapperTitle>
      <WrapperCards>
        <CardImage image="pool" title={'Con piscina'} />
        <CardImage image="beach" title={'Playa cercana'} />
        <CardImage image="pet" title={'Con tus mascotas'} />
        <CardImage image="free_air" title={'Al aire libre'} />
      </WrapperCards>
      <WrapperTitle>
        <SubTitleCards>Los mejores alojamientos te esperan</SubTitleCards>
      </WrapperTitle>
      <WrapperInfo>
        <ContainerInfo>
          <ImgInfo src="/infouno.jpg" alt="Picture of the author" />
          <TitleInfo> Viaja con tu pareja o familia </TitleInfo>
          <Info>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          </Info>
        </ContainerInfo>
        <ContainerInfo>
          <ImgInfo src="/infodos.jpg" alt="Picture of the author" />
          <TitleInfo> Viaja para tus negocios </TitleInfo>
          <Info>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content here, making it look like readable English.
          </Info>
        </ContainerInfo>
        <ContainerInfo>
          <ImgInfo src="/infotres.jpg" alt="Picture of the author" />
          <TitleInfo> Viaja con tus amigos </TitleInfo>
          <Info>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum
          </Info>
        </ContainerInfo>
      </WrapperInfo>
      {/* <WrapperCards>
        <Card />
        <Card />
        <Card />
        <Card />
      </WrapperCards> */}
    </>
  );
}
