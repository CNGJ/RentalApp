import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IFeatures } from '../../../../Context/PublicationContext';
import { mapFeatureToIcon } from '../../../../utils/mappers';

interface Props {
  features: IFeatures[];
}

const Features = ({ features }: Props) => {
  const getIconElement = (featureName: string, amount: number) => {
    const iconData = mapFeatureToIcon(featureName);
    return (
      <>
        {iconData ? (
          <>
            <FontAwesomeIcon icon={iconData.icon} size="lg" />
            <span>
              {amount} {iconData.name}
            </span>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {features.map(({ name, amount }, i) => {
        if (amount > 0) {
          return (
            <div key={i} style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
              {getIconElement(name, amount)}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Features;
