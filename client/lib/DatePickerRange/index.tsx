/* eslint-disable max-len */
import React, { useState, useRef, FC } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Helmet from 'react-helmet';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import moment from 'moment';
import theme from '../../theme';

interface IDatePickerRange {
  value: { from: any; to: any };
  setValue: (a: any) => void;
}

const DatePickerRange: FC<IDatePickerRange> = ({ value, setValue }) => {
  // const [value, setValue] = useState({ from: undefined, to: undefined });
  const ref = useRef(null);

  const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  const parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  const showFromMonth = () => {
    const { from } = value;
    if (!from) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (moment(to).diff(moment(from), 'months') < 2) {
      ref.current.getDayPicker().showMonth(from);
    }
  };

  const handleFromChange = from => {
    const newstate = { ...value, from };
    setValue(newstate);
  };

  const handleToChange = to => {
    const newstate = { ...value, to };
    setValue(newstate);
    showFromMonth();
  };

  const formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale });
  };

  const FORMAT = 'dd/MM/yyyy';
  const { from, to } = value;
  const modifiers = { start: from, end: to };

  return (
    <>
      <div className="InputFromTo">
        <DayPickerInput
          value={value.from}
          placeholder={'Desde'}
          format={FORMAT}
          formatDate={formatDate}
          parseDate={parseDate}
          onDayChange={handleFromChange}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            months: MONTHS,
            weekdaysShort: WEEKDAYS_SHORT,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => {
              ref.current.getInput().focus();
            }
          }}
        />
        {''}-{''}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={ref}
            value={value.to}
            placeholder={'Hasta'}
            format={FORMAT}
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2
            }}
            onDayChange={handleToChange}
          />
        </span>
      </div>
      <Helmet>
        <style>{`
  .InputFromTo .DayPickerInput > input {
    text-align: center;
    padding: 0.6rem;
    width: 119px;
    border-radius: 0.8rem;
    font-size: 16px;
    border: 1px solid ${theme.Secondary} !important;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.15);
    color: ${theme.Primary};
    font-weight: 500;

    :focus{
      border: 1px solid ${theme.Secondary} !important;
    }
  }
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
      </Helmet>
    </>
  );
};

export default DatePickerRange;
