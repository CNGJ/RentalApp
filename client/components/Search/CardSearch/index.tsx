import React, { useEffect } from 'react';
import { faBed, faDoorClosed, faStar, faUser, faUsers, faBath } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WrapperCard, Title, Fav, ImgCard, Type, WrapperIcons, SpanIcons, WrapIconSpan, Price, Score } from './styles';

// esta bien que sean opcionales? puede pasar que no haya cocina?
interface Features {
  toilets?: number;
  bedrooms?: number;
  environments?: number;
  kitchen?: number;
}

//poner type como obligatorio
interface CardInfo {
  type?: string;
  name: string;
  guests: number;
  features: Features;
  price: number;
  onClick?: (e:any) => void;
}

const CardSearch = (cardInfo: CardInfo) => {
  const { type, name, guests, features, price, onClick } = cardInfo;

  useEffect(() => {
    console.log('cambio el card');
  }, [cardInfo]);

  return (
    <>
      <WrapperCard
        onClick={(e) => {
          console.log('click en publicacion');
          
          onClick(e);
        }}
      >
        <Fav
          onClick={() => {
            console.log('Favorito');
          }}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </Fav>
        <ImgCard src="/house1.jpg" alt="Picture of the author" />
        <div style={{ position: 'relative' }}>
          <Type>Casa</Type>
          <Title> {name}</Title>
          <WrapperIcons>
            <WrapIconSpan tooltip={'Huespedes'}>
              <SpanIcons>{guests}</SpanIcons>
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </WrapIconSpan>
            {/* bedrooms son habitaciones, como diferenciamos las camas? */}
            <WrapIconSpan tooltip={'Camas'}>
              <SpanIcons>{features.bedrooms}</SpanIcons>
              <FontAwesomeIcon icon={faBed} size="lg" />
            </WrapIconSpan>
            <WrapIconSpan tooltip={'Dormitorios'}>
              <SpanIcons>{features.bedrooms}</SpanIcons>
              <FontAwesomeIcon icon={faDoorClosed} size="lg" />
            </WrapIconSpan>
            <WrapIconSpan tooltip={'Baños'}>
              <SpanIcons>{features.toilets}</SpanIcons>
              <FontAwesomeIcon icon={faBath} size="lg" />
            </WrapIconSpan>
          </WrapperIcons>
          <Score>
            <FontAwesomeIcon icon={faStar} size="xs" />
          </Score>
        </div>

        <Price>
          <span style={{ fontSize: '14px' }}> c/noche </span> $ {price}
        </Price>
      </WrapperCard>
    </>
  );
};

export default CardSearch;
