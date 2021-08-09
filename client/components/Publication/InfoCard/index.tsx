import React from 'react';
import { IPublication } from '../../../Context/PublicationContext';
import Reservation from './Reservation';
import Title from './Title/index';
import Features from './Features/index';

interface Props {
  publication: IPublication;
}
// TODO: cambiar el valor de input del componente <Title/>
const InfoCard = ({ publication }: Props) => {
  return (
    <div style={{ marginRight: '3%', marginLeft: '3%' }}>
      <div>
        <Title title={publication.name} score={5} />
      </div>
      <hr style={{ marginTop: '4%', marginBottom: '4%' }} />
      <div>
        <Features features={publication.features} />
      </div>
      <hr style={{ marginTop: '4%', marginBottom: '4%' }} />
      <div>
        <Reservation price={publication.price} />
      </div>
    </div>
  );
};

export default InfoCard;
