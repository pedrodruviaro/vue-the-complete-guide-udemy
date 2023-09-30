export default {
  login(context) {
    context.commit('handleLogin', { isAuth: true });
  },

  logout(context) {
    context.commit('handleLogin', { isAuth: false });
  },
};
