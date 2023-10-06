export default {
    SET_USER(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.username = payload.username;
    },

    SET_AUTO_LOGOUT(state) {
        state.didAutoLogout = true;
    },
};
