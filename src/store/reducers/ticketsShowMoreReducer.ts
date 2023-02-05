import { CountAction, CountActionType, CountState } from '../../components/types/count';

const initialState: CountState = {
  count: 5,
};

export const ticketsShowMoreReducer = (state = initialState, action: CountAction): any => {
  switch (action.type) {
    case CountActionType.ADD_COUNT:
      return { count: state.count + action.payload };

    default:
      return state;
  }
};