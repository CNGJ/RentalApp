import React, { FC } from "react";
import { WrapperCard, ImgCard, Title } from "./style";

interface ICardImg {
  image: string;
  title: string;
}

export const CardImage: FC<ICardImg> = ({ image, title }) => {
  const src = `/${image}.jpg`;
  return (
    <>
      <WrapperCard>
        <ImgCard src={src} alt="Picture of the author" />
        <Title>{title}</Title>
      </WrapperCard>
    </>
  );
};
