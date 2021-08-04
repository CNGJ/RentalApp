import React, { useEffect, useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import Helmet from 'react-helmet';
import dateFnsFormat from 'date-fns/format';

interface Props {
  setDate: any;
}

const Calendar = ({ setDate }: Props) => {
  const initialDateRange = { from: undefined, to: undefined };
  const [dateRange, setDateRange] = useState(initialDateRange);
  const modifiers = { start: dateRange.from, end: dateRange.to };
  const numberOfMonths = 1;
  const { from, to } = dateRange;

  useEffect(() => {
    setDate(dateRange);
  }, [dateRange]);

  const handleDayClick = (day: Date) => {
    const range = DateUtils.addDayToRange(day, dateRange);
    setDateRange(range);
  };

  const handleResetDateRange = () => {
    setDateRange(initialDateRange);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '8%' }}>
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={day => handleDayClick(day)}
      />
      <Helmet>
        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span
          style={{ textAlign: 'right', marginRight: '5%', cursor: 'pointer', color: '#4a90e2' }}
          onClick={handleResetDateRange}
        >
          Borrar fechas
        </span>
      </div>
    </div>
  );
};

export default Calendar;
