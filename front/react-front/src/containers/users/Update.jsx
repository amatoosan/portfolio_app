import React, {Fragment, useReducer, useState, useEffect} from 'react';
import axios from 'axios';
// import {userUpdate} from '../../urls/index'

import {userPage} from '../../urls/index'

// apis
import {fetchUsers} from '../../apis/users/show';

import DefaultImage from '../../images/images.png'

//reducers
import {
  initialState as usersInitialState,
  usersActionTyps,
  usersReducer
} from '../../reducers/users';

export const UserUpdate =({
  match
}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState(null)

  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    dispatch({type: usersActionTyps.FETCHING});
    fetchUsers(match.params.id)
    .then((data) => {
      dispatch({
        type: usersActionTyps.FETCH_SUCCESS,
        payload: {
          user: data.user
        }
      })
      setName(data.user.name)
      setEmail(data.user.email)
      setImage(data.user.image.url)

      console.log(data.user)
      console.log(data.user.image.url)

    })
  }, [])

  const handleChangeFile = (event) => {
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
    const files = event.target.files
    const image_url = createObjectURL(files[0])
    setImage(image_url)
  }

  const handleSubmit = (event) => {
    axios.patch(userPage(match.params.id),
      {
        user: {
          name: name,
          email: email,
          image: image,
        }
      }
    )
    .then((response) => { return response.data })
    .catch((event) => { throw event; })
    event.preventDefault()
  }

  return (
    <Fragment>
      ユーザー更新ページです
      <form onSubmit={handleSubmit}>
      <br/>
      <label>ユーザー名</label>
      <input
        type="text"
        // name="name"
        value={name}
        // value={state.userData.name}
        // defaultValue={state.userData.name}
        onChange={event => setName(event.target.value)}
      />
      <br/>
      <label>メールアドレス</label>
      <input
        type="email"
        // name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br/>
      <label>画像</label>
      <input
        type="file"
        onChange={(event) => {handleChangeFile(event)}}
      />
      {image ? (
          <img src={image}/>
        ) : (
          <img src={DefaultImage}/>
      )}
      <button type="submit">更新</button>
      </form>
    </Fragment>
  )
}
