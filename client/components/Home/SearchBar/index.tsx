import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import {
  WrapperSearchBox, InputBox, Button,
} from './styles';
import AutoComplete from '../../../lib/AutoComplete';
import { DatePickerRange } from '../../../lib/DatePickerRange';
import { InputGuests } from '../../../lib/Guestinput';

const SearchBox = (): any => {
  const [destino, setdestino] = useState(null);
  const [date, setDate] = useState({ from: undefined, to: undefined });
  const [guest, setguest] = useState({ adults: 0, kids: 0, pets: 0 });

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${destino}`);
  };

  return (
    <WrapperSearchBox onSubmit={handleSearch}>
      <InputBox>
        <AutoComplete
          name="Destino"
          message={null}
          width="150"
          placeholder="Destino"
          disabled={false}
          setValue={setdestino}
          onChange={(e) => {
            setdestino(e.target.value);
          }}
          value={destino}
        />
      </InputBox>
      <InputBox>
        <DatePickerRange value={date} setValue={setDate} />
      </InputBox>
      <InputBox>
        <InputGuests state={guest} setstate={setguest} />
      </InputBox>
      <InputBox>
        <Button type="submit" disabled={!destino}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputBox>
    </WrapperSearchBox>
  );
};

export default SearchBox;
