import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Dispatch } from 'redux';
import { TicketsAction, TiscketsActionType } from '../../components/types/tickets';

export const requestTickets = (dispatch: Dispatch<TicketsAction>, id: string): void => {
  dispatch({ type: TiscketsActionType.FETH_TIKETS });
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((tickets) => {
      return tickets.json();
    })
    .then((tickets) => {
      if (tickets.stop) {
        dispatch({ type: TiscketsActionType.FETH_TIKETS_SUCCESS });
        return;
      }
      if (tickets.tickets.length) {
        dispatch({ type: TiscketsActionType.FETH_TIKETS_SUCCESS_PART, payload: tickets.tickets });
        requestTickets(dispatch, id);
      }
    })
    .catch(() => {
      requestTickets(dispatch, id);
    });
};

export const asyncSetTickets = (id: string) => {
  return (dispatch: Dispatch<TicketsAction>) => {
    requestTickets(dispatch, id);
  };
};

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
export const onChange = (list: CheckboxValueType[]) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: 'CHECKED_LIST', payload: list });
    dispatch({ type: 'INDETERMINATE', payload: !!list.length && list.length < plainOptions.length });
    dispatch({ type: 'CHECK_ALL', payload: list.length === plainOptions.length });
  };
};

export const onCheckAllChange = (e: CheckboxChangeEvent) => {
  return (dispatch: any) => {
    dispatch({ type: 'CHECKED_LIST', payload: e.target.checked ? plainOptions : [] });
    dispatch({ type: 'INDETERMINATE', payload: false });
    dispatch({ type: 'CHECK_ALL', payload: e.target.checked });
  };
};

export const setFilter = (sort: string): any => {
  return (dispatch: any) => {
    return dispatch({ type: 'SET_SORT', payload: sort });
  };
};
