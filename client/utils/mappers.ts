import {
  faBath,
  faBed,
  faHouseUser,
  faWineGlass,
  faSwimmingPool,
  faWheelchair,
  faWeightHanging,
  faWaveSquare,
  faXRay,
  faQuestion,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface IconData {
  name: string;
  icon: IconDefinition;
}

const FeatureEnum = {
  toilets: { name: 'Baños', icon: faBath },
  bedrooms: { name: 'Habitaciones', icon: faHouseUser },
  beds: { name: 'Camas', icon: faBed },
  bunkBeds: { name: 'Camas cuchetas', icon: faWineGlass },
  pool: { name: 'Piscina', icon: faSwimmingPool },
  balcony: { name: 'Balcón', icon: faWheelchair },
  kitchen: { name: 'Cocina', icon: faWeightHanging },
  yard: { name: 'Patio', icon: faWaveSquare },
  environments: { name: 'Ambientes', icon: faXRay }
};

const mapFeatureToIcon = (feature: string): IconData => {
  if (!feature || !FeatureEnum[feature]) return;

  return FeatureEnum[feature];
};

export { mapFeatureToIcon };
