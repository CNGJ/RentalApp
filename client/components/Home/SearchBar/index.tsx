import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { WrapperSearchBox, InputBox, Button, Search } from './styles';
import AutoComplete from '../../../lib/AutoComplete';
import DatePickerRange from '../../../lib/DatePickerRange';
import InputGuests from '../../../lib/Guestinput';
import { PublicationContext } from '../../../Context/PublicationContext';

const SearchBox = (): any => {
  const [destination, setdestination] = useState(null);
  const [date, setDate] = useState({ from: undefined, to: undefined });
  const [guest, setguest] = useState({ adults: 0, kids: 0, pets: 0 });
  const { setSearchFilters } = useContext(PublicationContext);

  const router = useRouter();

  const handleSearch = e => {
    e.preventDefault();

    setSearchFilters({
      destination,
      from: date.from,
      to: date.to,
      adults: guest.adults,
      kids: guest.kids,
      pets: guest.pets
    });
    router.push(`/search/${destination}`);
  };

  return (
    <WrapperSearchBox onSubmit={handleSearch}>
      <InputBox>
        <AutoComplete
          name="Destino"
          message={null}
          type="text"
          width="150"
          placeholder="Destino"
          disabled={false}
          setValue={setdestination}
          onChange={e => {
            setdestination(e.target.value);
          }}
          value={destination}
        />
      </InputBox>
      <InputBox>
        <DatePickerRange value={date} setValue={setDate} />
      </InputBox>
      <InputBox>
        <InputGuests state={guest} setstate={setguest} />
      </InputBox>
      <InputBox>
        <Button type="submit" disabled={!destination}>
          <Search />
        </Button>
      </InputBox>
    </WrapperSearchBox>
  );
};

export default SearchBox;
