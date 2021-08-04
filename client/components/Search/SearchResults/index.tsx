import React, { useContext, useEffect, FC } from 'react';
import CardSearch from '../CardSearch';
import { PublicationContext, IPublication } from '../../../Context/PublicationContext';
import { WrapperSearchResults } from './styles';
import { ModalContext } from '../../../Context/ModalContext';
import EmptyState from './emptyState';
import { useRouter } from 'next/router';

const SearchResults: FC = () => {
  const { searchPublications, isLoading } = useContext(PublicationContext);
  const { setshowSpinner } = useContext(ModalContext);
  const router = useRouter();

  useEffect(() => {
    setshowSpinner(isLoading);
  }, [isLoading]);

  // pets cuenta como guest?
  const getTotalGuests = ({ terms }: IPublication) => terms.adults + terms.kids + terms.pets;

  const handleClick = (e: any, { id }: IPublication) => {
    e.preventDefault();
    router.push(`/publication/${id}`);
  };

  return (
    <WrapperSearchResults>
      {isLoading ? (
        <>{/* aqui vamos a poner un skeleton */}</>
      ) : (
        <>
          {searchPublications.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {searchPublications.map((pb, i) => (
                <CardSearch
                  key={i}
                  name={pb.name}
                  features={pb.features}
                  price={pb.price}
                  guests={getTotalGuests(pb)}
                  onClick={e => handleClick(e, pb)}
                />
              ))}
            </>
          )}
        </>
      )}
    </WrapperSearchResults>
  );
};

export default SearchResults;
