import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';
import { PublicationContext } from '../../Context/PublicationContext';

const PublicationView: FC = () => {
  // const {searchPublications} = useContext(PublicationContext)
  // const [publication, setPublication] = useState({});

  // const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {
  //     setPublication(searchPublications.find(pb => pb.id === id));
  // }, [id])

  return (
    <div style={{ marginTop: '7rem' }}>
      <h1>PUBLICACION</h1>
    </div>
  );
};

export default PublicationView;
