import axios from 'axios';
import { userPage } from '../../urls/index'

export const fetchUsers = async(userId) => {
  return await axios.get(userPage(userId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
