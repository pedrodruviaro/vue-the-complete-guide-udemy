export default {
  handleLogin(state, payload) {
    if (payload.isAuth === true) {
      state.isLoggedIn = true;
      return;
    } else {
      state.isLoggedIn = false;
    }
  },
};
