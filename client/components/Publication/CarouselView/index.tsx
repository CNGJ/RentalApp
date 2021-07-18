import React from 'react';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselView: FC = () => {
  return (
    <div style={{ flex: 2, marginRight: '5%', maxHeight: '600px', maxWidth: '800px' }}>
      <Carousel showArrows={true} dynamicHeight={false}>
        <div>
          <img src="https://tecnohotelnews.com/wp-content/uploads/2020/07/image004-2.jpg" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://edificor.com.ar/blog/wp-content/uploads/2018/08/habitacion-gris-4.jpg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://edificor.com.ar/blog/wp-content/uploads/2018/08/habitacion-gris-4.jpg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselView;
