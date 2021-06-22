import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../../theme';
import { TitleEmpty, WrapperEmpty } from './styles';

const EmptyState: FC = () => {
  return (
    <>
      <WrapperEmpty>
        <FontAwesomeIcon icon={faGhost} style={{ color: `${theme.Primary}` }} size="5x" />
        <TitleEmpty>Ups! al parecer no hay resultados de tu busqueda </TitleEmpty>
      </WrapperEmpty>
    </>
  );
};

export default EmptyState;
