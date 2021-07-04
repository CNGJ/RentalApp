import React, { FC, useContext } from 'react';
import { ModalContext } from '../../../Context/ModalContext';
import { WrapperFilters, Filter, FilterTitle, IconFilter } from './styles';

const Filters: FC = () => {
  const { setShowSide, setInfoSide } = useContext(ModalContext);

  return (
    <>
      <WrapperFilters>
        <Filter
          onClick={() => {
            setInfoSide({
              title: 'Filtros',
              children: <p> Todo </p>
            });
            setShowSide(true);
          }}
        >
          <IconFilter />
          <FilterTitle>Filtrar</FilterTitle>
        </Filter>
      </WrapperFilters>
    </>
  );
};

export default Filters;
