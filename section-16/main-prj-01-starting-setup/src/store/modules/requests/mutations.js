export default {
  ADD_REQUEST(state, payload) {
    state.requests.unshift(payload);
  },

  SET_REQUESTS(state, payload) {
    state.requests = payload;
  },
};
