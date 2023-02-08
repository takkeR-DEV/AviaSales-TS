import React, { FC } from 'react';
import Tickets from '../Tickets/Tickets';
import { FilteredDataType } from '../../types/tickets';

function counter() {
  let maxId = 1;
  return () => maxId++;
}

const maxId = counter();
const TicketsList: FC<FilteredDataType> = ({ filterTicketsData }) => {
  return (
    <div>
      {filterTicketsData.map((data) => {
        return <Tickets key={maxId()} price={data.price} carrier={data.carrier} segments={data.segments} />;
      })}
    </div>
  );
};

export default TicketsList;
