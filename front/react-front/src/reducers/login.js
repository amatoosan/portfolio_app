export const initialState = {
  loginStatus: "未ログイン",
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'isLogin':
      return {
        ...state,
        loginStatus: "ログイン済",
      };
    default:
      throw new Error();
  }
}
