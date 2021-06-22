import React, { FC } from 'react';
import Header from '../../components/Home/Header';
import SearchView from '../../components/Search/SearchView';

const Search: FC = () => {
  return (
    <>
      <Header fixed={true} />

      <SearchView />
    </>
  );
};

export default Search;
