export type TicketsDataType = TicketsDataTypeObj[];

interface TicketsDataTypeObj {
  price: number;
  carrier: string;
  segments: { duration: number; stops: string[] }[];
}

export interface TicketState {
  ticketsData: TicketsDataType;
  loading?: boolean;
  error?: null | string;
}

export enum TiscketsActionType {
  FETH_TIKETS = 'FETH_TIKETS',
  FETH_TIKETS_ERROR = 'FETH_TIKETS_ERROR',
  FETH_TIKETS_SUCCESS = 'FETH_TIKETS_SUCCESS',
  FETH_TIKETS_SUCCESS_PART = 'FETH_TIKETS_SUCCESS_PART',
}

interface FetchTicketsAction {
  type: TiscketsActionType.FETH_TIKETS;
}
interface FetchTicketsSuccessAction {
  type: TiscketsActionType.FETH_TIKETS_SUCCESS;
}
interface FetchTicketsErrorAction {
  type: TiscketsActionType.FETH_TIKETS_ERROR;
  payload: string;
}
interface FetchTicketsSuccessPartAction {
  type: TiscketsActionType.FETH_TIKETS_SUCCESS_PART;
  payload: any[];
}
export type TicketsAction =
  | FetchTicketsAction
  | FetchTicketsSuccessAction
  | FetchTicketsErrorAction
  | FetchTicketsSuccessPartAction;
