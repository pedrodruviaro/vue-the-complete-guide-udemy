let timer;

export default {
  async auth(context, payload) {
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7T_CdmTB-pfClkKP9EMxaWOiq6jM_D0k`;

    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7T_CdmTB-pfClkKP9EMxaWOiq6jM_D0k`;
    }

    const response = await fetch(url, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error.message || 'Failed to authenticate');
      throw error;
    }

    const expiresIn = Number(responseData.expiresIn * 1000); //ms
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('tokenExpiration', expirationDate);
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('SET_USER', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  async login(context, payload) {
    // precisa retornar para os componentes receberem a resposta
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },

  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  logout(context) {
    context.commit('SET_USER', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = Number(tokenExpiration) - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('SET_USER', {
        token,
        userId,
      });

      return;
    }
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('SET_AUTO_LOGOUT');
  },
};
