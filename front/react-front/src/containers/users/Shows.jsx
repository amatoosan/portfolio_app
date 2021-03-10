import React, { Fragment, useReducer, useEffect } from 'react';

// apis
import { fetchUsers } from '../../apis/users/show';

// reducers
import {
  initialState as usersInitialState,
  usersActionTyps,
  usersReducer,
} from '../../reducers/users';

export const Shows = ({
  match
}) => {

  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    dispatch({ type: usersActionTyps.FETCHING });
    fetchUsers(match.params.id)
    .then((data) => {
      dispatch({
        type: usersActionTyps.FETCH_SUCCESS,
        payload: {
          user: data.user
        }
      })
    })
  }, [])
  
  return (
    <Fragment>
      ユーザーページです
      <p>
      ユーザーIDは {state.userData.id} です
      </p>
      <p>
      ユーザー名は {state.userData.name} です
      </p>
      <p>
      メールアドレスは {state.userData.email} です
      </p>
    </Fragment>
  )
}
