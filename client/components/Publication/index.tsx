import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';
import { PublicationContext, IPublication } from '../../Context/PublicationContext';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { WrapperCard } from './styles';
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
    <div style={{ marginTop: '7rem' }}>
      {publication ? (
        <>
          <h1 style={{ marginLeft: '14%' }}>{publication.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
            {/* Carousel + icons */}
            <CarouselView />
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
