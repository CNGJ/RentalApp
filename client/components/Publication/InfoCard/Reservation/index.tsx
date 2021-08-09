import React, { useEffect, useState } from 'react';
import Calendar from '../../../../lib/Calendar';
import DatePickerRange from '../../../../lib/DatePickerRange';
import { countNights } from '../../../../utils/utils';

interface Props {
  price: number;
}

const Reservation = ({ price }: Props) => {
  const initialDateRange = { from: undefined, to: undefined };
  const [date, setDate] = useState(initialDateRange);
  const [totalNights, setTotalNights] = useState(0);
  const [guestsCounter, setGuestsCounter] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    setTotalBill(guestsCounter * price * totalNights);
  }, [guestsCounter]);

  useEffect(() => {
    setTotalBill(guestsCounter * price * totalNights);
  }, [totalNights]);

  useEffect(() => {
    if (date.from && date.to) {
      const totalNights = countNights(date.from, date.to);
      setTotalNights(totalNights);
    } else {
      setTotalNights(0);
    }
  }, [date]);

  //VER TEMA DE FORMATOS DE PLATA
  //AGREGAR COMPORTAMIENTO DEL TOTAL CUANDO SE SUMAN DIAS Y/O PERSONAS
  //VER ESTILOS DE BOTONES

  const handleAddGuest = () => {
    setGuestsCounter(guestsCounter + 1);
  };

  const handleSubstractGuest = () => {
    if (guestsCounter > 0) setGuestsCounter(guestsCounter - 1);
  };

  return (
    <div style={{ marginRight: '4%', marginLeft: '4%' }}>
      <strong>${price} / noche</strong>
      <Calendar setDate={setDate} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>Huéspedes</div>
        <div style={{ flex: 1 }}>{guestsCounter}</div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <button style={{ marginRight: '4%' }} onClick={handleAddGuest}>
            +
          </button>
          <button onClick={handleSubstractGuest}>-</button>
        </div>
      </div>
      <hr style={{ marginTop: '4%', marginBottom: '4%', opacity: '0.4' }} />
      <div style={{ marginBottom: '7%', marginTop: '5%' }}>
        <div>Total:</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>${totalBill}</div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginRight: '5%' }}>
            <button>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
