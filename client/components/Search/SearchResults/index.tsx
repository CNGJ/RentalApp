import React, { useContext, useEffect } from 'react';
import CardSearch from '../CardSearch';
import { PublicationContext, IPublication } from '../../../Context/PublicationContext';
import { WrapperSearchResults } from './styles';

export const SearchResults = () => {
  const { searchPublications, isLoading } = useContext(PublicationContext);

  useEffect(() => {}, [searchPublications, isLoading]);

  //pets cuenta como guest?
  const getTotalGuests = ({ terms }: IPublication) => terms.adults + terms.kids + terms.pets;

  return (
    <WrapperSearchResults>
      {isLoading ? (
        <>
          {/* aca va el spinner */} <h1>CARGANDO</h1>
        </>
      ) : (
        <>
          {searchPublications.map((pb, i) => (
            <CardSearch key={i} name={pb.name} features={pb.features} price={pb.price} guests={getTotalGuests(pb)} />
          ))}
        </>
      )}
    </WrapperSearchResults>
  );
};
