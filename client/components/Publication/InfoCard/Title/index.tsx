import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  title: string;
  // eslint-disable-next-line react/require-default-props
  score?: number;
}

// TODO: sacar el score opcional y el numero por default. era solo para prueba. definirlo en la base

const Title = ({ title, score = 5 }: Props) => {
  console.log('Title component', title, score);

  const getStars = () => {
    const stars = [];

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < score; index++) {
      stars.push(<FontAwesomeIcon key={index} icon={faStar} size="xs" />);
    }

    console.log(stars);

    return stars;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4%' }}>{getStars()}</div>
      <h2 style={{ display: 'flex', marginTop: '2%', marginBottom: 0 }}>{title}</h2>
    </div>
  );
};

export default Title;
