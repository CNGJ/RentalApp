import React from "react";
import Header from "../../components/Home/Header";
import SearchView from "../../components/Search/SearchView";

const Search = () => {
  return (
    <>
      <Header fixed={true} />

      <SearchView />
    </>
  );
};

export default Search;
