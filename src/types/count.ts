export interface CountState {
  count: number;
}

export enum CountActionType {
  ADD_COUNT = 'ADD_COUNT',
}

interface AddCountAction {
  type: CountActionType.ADD_COUNT;
  payload: number;
}

export type CountAction = AddCountAction;
