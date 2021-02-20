const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api/v1'

export const signup = `${DEFAULT_API_LOCALHOST}/signup`
export const userPage = (userId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}`
export const loggedIn = `${DEFAULT_API_LOCALHOST}/logged_in`
