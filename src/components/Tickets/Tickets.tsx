import React, { FC } from 'react';
import uniqid from 'uniqid';
import './Tickets.scss';
const localeStringConfig = {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 10,
};

const getTicketTargetTime = (date: string, duration: number) => {
  const dateFrom = new Date(date);
  const dateTo = new Date(dateFrom.getMilliseconds() + duration * 60000);
  return `${dateFrom.getUTCHours() < 10 ? `0${dateFrom.getUTCHours()}` : dateFrom.getUTCHours()}:${
    dateFrom.getUTCMinutes() < 10 ? `0${dateFrom.getUTCMinutes()}` : dateFrom.getUTCMinutes()
  } - ${dateTo.getUTCHours() < 10 ? `0${dateTo.getUTCHours()}` : dateTo.getUTCHours()}:${
    dateTo.getUTCMinutes() < 10 ? `0${dateTo.getUTCMinutes()}` : dateTo.getUTCMinutes()
  }`;
};

interface ITicketsProps {
  price: number;
  carrier: string;
  segments: any[];
}
const Tickets: FC<ITicketsProps> = ({ price, carrier, segments }) => {
  const imageUrl = `https://pics.avs.io/99/36/${carrier}.png`;
  const info = segments.map((seg) => {
    return (
      <ul key={uniqid()}>
        <li>
          <h3>
            {seg.origin} – {seg.destination}
          </h3>
          <span>{getTicketTargetTime(seg.date, seg.duration)}</span>
        </li>
        <li>
          <h3>В ПУТИ</h3>
          <span>
            {Math.trunc(seg.duration / 60)}ч {Math.trunc(seg.duration % 60)}м
          </span>
        </li>
        <li>
          <h3>{seg.stops.length ? `${seg.stops.length} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК'}</h3>
          <span>{seg.stops.join(',')}</span>
        </li>
      </ul>
    );
  });
  return (
    <div className="tickets">
      <div className="tickets__header">
        <span className="tickets__cost">{price.toLocaleString('ru-RU', localeStringConfig)}</span>
        <img src={imageUrl} alt="" />
      </div>
      <div className="tickets__info">{info}</div>
    </div>
  );
};

export default Tickets;
