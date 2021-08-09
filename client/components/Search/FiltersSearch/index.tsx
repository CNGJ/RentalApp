import React, { FC, useContext } from 'react';
import { ModalContext } from '../../../Context/ModalContext';
import { WrapperFilters, Filter, FilterTitle, IconFilter } from './styles';
import FilerPublication from '../../filterPublication';

const Filters: FC = () => {
  const { setShowModal, showModal, setInfoModal } = useContext(ModalContext);

  const handleFilter = () => {
    setShowModal(!showModal);
    setInfoModal({
      children: <FilerPublication />,
      title: 'Filtros'
    });
  };

  return (
    <>
      <WrapperFilters>
        <Filter onClick={handleFilter}>
          <IconFilter />
          <FilterTitle>Filtrar</FilterTitle>
        </Filter>
      </WrapperFilters>
    </>
  );
};

export default Filters;
