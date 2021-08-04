import { faBath, faBed, faHouseUser, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IFeatures } from '../../../../Context/PublicationContext';

interface Props {
  features: IFeatures[];
}

const Features = ({ features }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {features.map(({ name, amount }, i) => {
        if (amount > 0) {
          return (
            <div key={i} style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
              <FontAwesomeIcon icon={faBed} size="lg" />
              <span>
                {amount} {name}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Features;
