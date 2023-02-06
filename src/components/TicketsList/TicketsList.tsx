import React, { FC } from 'react';
import Tickets from '../Tickets/Tickets';
import uniqid from 'uniqid';
import { FilteredDataType } from '../../types/tickets';

const TicketsList: FC<FilteredDataType> = ({ filterTicketsData }) => {
  console.log('DATA', filterTicketsData);

  return (
    <div>
      {filterTicketsData.map((data) => {
        return <Tickets key={uniqid()} price={data.price} carrier={data.carrier} segments={data.segments} />;
      })}
    </div>
  );
};

export default TicketsList;
