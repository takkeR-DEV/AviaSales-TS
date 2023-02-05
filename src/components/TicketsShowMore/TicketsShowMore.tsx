import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import './TicketsShowMore.scss';

const TicketsShowMore: FC = () => {
  const dispatch = useDispatch();
  const addListTickets = (): any => {
    dispatch({ type: 'ADD_COUNT', payload: 5 });
  };
  return (
    <div className="ticketsshowmore" onClick={addListTickets}>
      <button className="ticketsshowmore__btn">
        <span>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
      </button>
    </div>
  );
};

export default TicketsShowMore;
