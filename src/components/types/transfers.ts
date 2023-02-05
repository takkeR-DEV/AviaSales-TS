import { CheckboxValueType } from 'antd/es/checkbox/Group';

export interface TransfersState {
  checkedList: string[];
  indeterminate: any;
  checkAll: any;
}

export enum TransfersActionType {
  CHECKED_LIST = 'CHECKED_LIST',
  INDETERMINATE = 'INDETERMINATE',
  CHECK_ALL = 'CHECK_ALL',
}

interface CheckedListAction {
  type: TransfersActionType.CHECKED_LIST;
  payload: CheckboxValueType[];
}
interface IndeterminateAction {
  type: TransfersActionType.INDETERMINATE;
  payload: CheckboxValueType[];
}
interface CheckAllAction {
  type: TransfersActionType.CHECK_ALL;
  payload: CheckboxValueType[];
}

export type TransfersAction = CheckedListAction | IndeterminateAction | CheckAllAction;
