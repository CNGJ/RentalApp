import { faBath, faBed, faHouseUser, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IFeatures } from '../../../../Context/PublicationContext';

interface Props {
  features: IFeatures;
}

const Features = ({ features }: Props) => {
  console.log('features', features);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <div>
        {features.bedrooms && (
          <div>
            <FontAwesomeIcon icon={faBed} size="lg" />
          </div>
        )}
      </div>
      <div>
        {features.environments && (
          <div>
            <FontAwesomeIcon icon={faHouseUser} size="lg" />
          </div>
        )}
      </div>
      {/* <div>
        {features.kitchen && (
          <div>
            <FontAwesomeIcon icon={faWineGlass} size="lg" />
          </div>
        )}
      </div> */}
      <div>
        {() => {
          if (features.kitchen)
            <div>
              <FontAwesomeIcon icon={faWineGlass} size="lg" />
            </div>;
        }}
      </div>
      <div>
        {features.toilets && (
          <div>
            <FontAwesomeIcon icon={faBath} size="lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
