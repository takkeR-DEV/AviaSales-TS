interface FilterState {
  sort: string;
}

enum SortActionType {
  SET_SORT = 'SET_SORT',
}

interface sortType {
  type: SortActionType.SET_SORT;
  payload: any;
}

const initialState: FilterState = {
  sort: 'price',
};

export const filterReducer = (state = initialState, action: sortType): any => {
  switch (action.type) {
    case SortActionType.SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
