import React from 'react';

interface Props {
  price: number;
}

const Reservation = ({ price }: Props) => {
  return (
    <div>
      <strong>${price} / noche</strong>
    </div>
  );
};

export default Reservation;
