import axios from 'axios';
import { userPage } from '../../urls/index'

export const patchUserUpdate = async(userId, params) => {
  return await axios.patch(userPage(userId),
  // サーバーサイドでは、:user[params[:name]]...と受け取る？
  {
    user: {
      name: params.name,
      email: params.email,
      // password: params.password,
      // password_confirmation: params.passwordConfirmation,
      image: params.image
    }
  })
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
}
