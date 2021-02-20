import axios from 'axios';
import { loggedIn } from '../../urls/index'

export const fetchLoginStatus = async() => {
  return await axios.get(loggedIn,
  { withCredentials: true })
  .then(res => {
    return res.date
  })
  .catch((e) => console.error(e))
}
