import React from 'react';
import { faBed, faDoorClosed, faStar, faUser, faUsers, faBath } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WrapperCard, Title, Fav, ImgCard, Type, WrapperIcons, SpanIcons, WrapIconSpan, Price, Score } from './styles';

const CardSearch = () => {
  return (
    <>
      <WrapperCard
        onClick={() => {
          console.log('Ir al Detalle');
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
          <Title> Casa de campo en Tigre excelente para el verano </Title>
          <WrapperIcons>
            <WrapIconSpan tooltip={'Huespedes'}>
              <SpanIcons>2</SpanIcons>
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </WrapIconSpan>
            <WrapIconSpan tooltip={'Camas'}>
              <SpanIcons>2</SpanIcons>
              <FontAwesomeIcon icon={faBed} size="lg" />
            </WrapIconSpan>
            <WrapIconSpan tooltip={'Dormitorios'}>
              <SpanIcons>2</SpanIcons>
              <FontAwesomeIcon icon={faDoorClosed} size="lg" />
            </WrapIconSpan>
            <WrapIconSpan tooltip={'Baños'}>
              <SpanIcons>2</SpanIcons>
              <FontAwesomeIcon icon={faBath} size="lg" />
            </WrapIconSpan>
          </WrapperIcons>
          <Score>
            <FontAwesomeIcon icon={faStar} size="xs" />
          </Score>
        </div>

        <Price>
          <span style={{ fontSize: '14px' }}> c/noche </span> $ 1000.85
        </Price>
      </WrapperCard>
    </>
  );
};

export default CardSearch;
