import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import TicketsList from '../TicketsList/TicketsList';
import Transfers from '../Transfers/Transfers';
import AviaSalesApi from '../../service/api/aviaSalesApi';
import { Spin } from 'antd';
import './App.scss';
import TicketsShowMore from '../TicketsShowMore/TicketsShowMore';
import { useActions } from '../../hooks/useActions';
import { TicketsDataType } from '../../types/tickets';

const api = new AviaSalesApi();

function App() {
  const { ticketsData, loading } = useTypedSelector((state) => state.ticketsData);
  const { checkedList } = useTypedSelector((state) => state.transfersReducer);
  const { count } = useTypedSelector((state) => state.count);
  const { sort } = useTypedSelector((state) => state.sort);
  const { asyncSetTickets } = useActions();
  console.log(ticketsData);

  const transfers = checkedList.map((el): number => {
    if (el === 'Без пересадок') {
      return 0;
    } else if (el === '1 пересадка') {
      return 1;
    } else if (el === '2 пересадки') {
      return 2;
    } else if (el === '3 пересадки') {
      return 3;
    } else return 0;
  });

  useEffect(() => {
    api.getSearchId().then((data) => {
      asyncSetTickets(data.searchId);
    });
  }, []);
  const getFiltredTickets = (ticketsData: TicketsDataType, transfers: number[]) => {
    const ticketsFiltred = ticketsData.filter((ticket) => {
      const stops = ticket.segments[0].stops.length;
      for (const transfersCount of transfers) if (stops === transfersCount) return true;
      return false;
    });
    if (sort === 'price') {
      return ticketsFiltred.sort((a, b) => a.price - b.price).slice(0, count);
    }
    if (sort === 'fast') {
      return ticketsFiltred
        .sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
        .slice(0, count);
    }

    return ticketsFiltred.slice(0, count);
  };

  const filterTicketsData = getFiltredTickets(ticketsData, transfers);

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__content">
        <Transfers />
        <div className="warapper__right">
          <Filter />
          {loading && filterTicketsData.length ? <Spin className="spin" size="large" /> : null}
          {!filterTicketsData.length ? <span className="nosearch">БИЛЕТОВ С ДАННЫМ ЗАПРОСОМ НЕ НАЙДЕНО</span> : null}
          <TicketsList filterTicketsData={filterTicketsData} />
          {filterTicketsData.length ? <TicketsShowMore /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
