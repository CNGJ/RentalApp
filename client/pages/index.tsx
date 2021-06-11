import React from "react";
import Header from "../components/Home/Header";
import Image from "next/image";
import {
  HomeTitle,
  WrapperHome,
  SpanTitle,
  TitleContainer,
  SubTitle,
  WrapperType,
  WrapperCards,
  SubTitleCards,
} from "../components/common/styles";
import { Boxtype } from "../components/Home/Boxtype";
import { Card } from "../components/Home/Cards";
import { CardImage } from "../components/Home/CardImage";

export default function Home() {
  return (
    <>
      <Header />
      <WrapperHome>
        <TitleContainer>
          <HomeTitle>
            Busquemos tu proximo alojamiento <SpanTitle>juntos</SpanTitle>.
          </HomeTitle>
        </TitleContainer>
      </WrapperHome>
      <WrapperHome column>
        <SubTitle bold opacity>
          Gana dinero con ese espacio que no utilizas, hazte dueño.
        </SubTitle>
      </WrapperHome>
      <WrapperType imgUrl={"/city-silueta.jpg"}>
        <Boxtype />
      </WrapperType>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <SubTitleCards>Encuentra lo ideal para vos</SubTitleCards>
      </div>
      <WrapperCards>
        <CardImage image="pool" title={"Con piscina"} />
        <CardImage image="beach" title={"Playa cercana"} />
        <CardImage image="pet" title={"Con tus mascotas"} />
        <CardImage image="free_air" title={"Al aire libre"} />
      </WrapperCards>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <SubTitleCards>Los mejores alojamientos te esperan</SubTitleCards>
      </div>
      <WrapperCards>
        <Card />
        <Card />
        <Card />
        <Card />
      </WrapperCards>
    </>
  );
}
