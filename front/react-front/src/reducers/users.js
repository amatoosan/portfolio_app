import { REQUEST_STATE } from '../constants';

// useReducderに渡す初期値を定義
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  userData: {},
};

export const usersActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const usersReducer = (state, action) => {
  switch (action.type) {
    case usersActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case usersActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        userData: action.payload.user,
      };
    default:
      throw new Error();
  }
}
