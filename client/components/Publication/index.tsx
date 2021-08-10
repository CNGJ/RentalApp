import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';
import { PublicationContext, IPublication } from '../../Context/PublicationContext';
import { WrapperCard, WrapperMap } from './styles';
import CarouselView from './CarouselView';
import InfoCard from './InfoCard/index';
import { useLazyQuery } from '@apollo/client';
import { GET_PUBLICATION_BY_ID } from '../../gql/Publications';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PublicationView: FC = () => {
  const { searchPublications } = useContext(PublicationContext);
  const [publication, setPublication] = useState(undefined as IPublication);
  const [getPublication, { loading, data }] = useLazyQuery(GET_PUBLICATION_BY_ID);
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const id = router.query.params;

      if (searchPublications.length !== 0) {
        const findedPublication = searchPublications.find(pb => pb.id === id);

        setPublication(findedPublication);
      } else {
        getPublication({ variables: { input: id } });
      }
    }
  }, [router.query]);

  useEffect(() => {
    if (data) {
      console.log(data.getPublication);
      const publication = data.getPublication;
      setPublication(publication);
    }
  }, [data]);

  return (
    <div style={{ marginTop: '7rem', marginBottom: '10%' }}>
      {publication ? (
        <>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', marginRight: '5%', marginTop: '7%' }}
          >
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
