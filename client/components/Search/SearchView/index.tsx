import React, { FC } from 'react';
import Filters from '../FiltersSearch';
import { WrapperResults, WrapperSearchView, WrapperMap } from './styles';
import SearchResults from '../SearchResults/index';

const SearchView: FC = () => {
  return (
    <>
      <WrapperSearchView>
        <WrapperResults>
          <Filters />
          <SearchResults />
        </WrapperResults>
        <WrapperMap imgUrl={'/mapa.png'}></WrapperMap>
      </WrapperSearchView>
    </>
  );
};

export default SearchView;
