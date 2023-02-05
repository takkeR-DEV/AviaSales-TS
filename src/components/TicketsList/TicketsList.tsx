import React, { FC } from 'react';
import Tickets from '../Tickets/Tickets';
import uniqid from 'uniqid';

interface Test {
  filterTicketsData: any[];
}
const TicketsList: FC<Test> = ({ filterTicketsData }) => {
  return (
    <div>
      {filterTicketsData.map((data) => {
        return <Tickets key={uniqid()} price={data.price} carrier={data.carrier} segments={data.segments} />;
      })}
    </div>
  );
};

export default TicketsList;
