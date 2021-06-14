import React from 'react';
// import {
//   faBed,
//   faDoorClosed,
//   faStar,
//   faUser,
//   faUsers,
//   faBath,
// } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt, faNewspaper, faCalendar, faSun, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WrapperFilters, Filter, FilterTitle } from './styles';

const Filters = () => {
  return (
    <>
      <WrapperFilters>
        <Filter>
          <FontAwesomeIcon icon={faMoneyBillAlt} size="lg" />
          <FilterTitle>Precio</FilterTitle>
        </Filter>
        <Filter>
          <FontAwesomeIcon icon={faNewspaper} size="lg" />
          <FilterTitle>Tipo</FilterTitle>
        </Filter>
        <Filter>
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <FilterTitle>Flexibilidad</FilterTitle>
        </Filter>
        <Filter>
          <FontAwesomeIcon icon={faSun} size="lg" />
          <FilterTitle>Piscina</FilterTitle>
        </Filter>
        <Filter>
          <FontAwesomeIcon icon={faCircle} size="lg" />
          <FilterTitle> + Filtros</FilterTitle>
        </Filter>
      </WrapperFilters>
    </>
  );
};

export default Filters;
