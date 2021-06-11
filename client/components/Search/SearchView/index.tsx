import React from "react";
import { CardSearch } from "../CardSearch";
import { Filters } from "../FiltersSearch";
import { WrapperResults, WrapperSearchView, WrapperMap } from "./styles";

const SearchView = () => {
  return (
    <>
      <WrapperSearchView>
        <WrapperResults>
          <Filters />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
        </WrapperResults>

        <WrapperMap imgUrl={"/mapa.png"} ></WrapperMap>
      </WrapperSearchView>
    </>
  );
};

export default SearchView;
