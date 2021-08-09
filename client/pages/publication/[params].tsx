import React, { FC } from 'react';
import Header from '../../components/Home/Header';
import PublicationView from '../../components/Publication';

const Publication: FC = () => {
  return (
    <>
      <Header fixed={true} />

      <PublicationView />
    </>
  );
};

export default Publication;
