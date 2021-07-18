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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
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
          <HomeTitle>
            Busquemos tu proximo alojamiento <SpanTitle>juntos</SpanTitle>.
          </HomeTitle>
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
