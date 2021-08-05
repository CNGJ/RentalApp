import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';
import { PublicationContext, IPublication } from '../../Context/PublicationContext';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { WrapperCard, WrapperMap } from './styles';
import CarouselView from './CarouselView';
import InfoCard from './InfoCard/index';

const PublicationView: FC = () => {
  const { searchPublications } = useContext(PublicationContext);
  const [publication, setPublication] = useState(undefined as IPublication);
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const id = router.query.params;
      const findedPublication = searchPublications.find(pb => pb.id === id);

      // VERIFICAR QUE LO HAYA ENCONTRADO, SI NO LO ENCONTRO HACER LLAMADA A LA BASE

      setPublication(findedPublication);
    }
  }, [router.query]);

  return (
    <div style={{ marginTop: '7rem', marginBottom: '10%' }}>
      {publication ? (
        <>
          <h1 style={{ marginLeft: '14%' }}>{publication.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
            {/* Carousel + icons */}
            <div style={{ marginRight: '3%' }}>
              <div>
                <CarouselView />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 'fit-content' }}>
                <WrapperMap imgUrl={'/mapa.png'}></WrapperMap>
                <div style={{ flex: 1 }}>
                  <div>
                    <span>Descripción</span>
                  </div>
                  <div>{publication.description}</div>
                </div>
              </div>
            </div>
            {/* InfoCard */}
            <WrapperCard>
              <InfoCard publication={publication} />
            </WrapperCard>
          </div>
        </>
      ) : (
        <h1>No se encontro la publicacion</h1>
      )}
    </div>
  );
};

export default PublicationView;
