const api_key = "AIzaSyCfIwB3qqT5V4QkEw-Lv2yioQeiok5J8RA";
let timer;

export default {
    async auth(context, payload) {
        const mode = payload.mode || "login";

        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;
        let fetchBody = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };

        if (mode === "signup") {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`;
            fetchBody = {
                email: payload.email,
                name: payload.name,
                password: payload.password,
                displayName: payload.name,
                returnSecureToken: true,
            };
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(fetchBody),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.error.message ||
                    "Failed to authenticate... try again later"
            );
        }

        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("tokenExpiration", expirationDate);
        localStorage.setItem("token", responseData.idToken);
        localStorage.setItem("userId", responseData.localId);
        localStorage.setItem("username", responseData.displayName);

        timer = setTimeout(() => {
            context.dispatch("autoLogout");
        }, expiresIn);

        context.commit("SET_USER", {
            token: responseData.idToken,
            userId: responseData.localId,
            username: responseData.displayName || "",
        });
    },

    async login(context, payload) {
        return context.dispatch("auth", {
            ...payload,
            mode: "login",
        });
    },

    async signup(context, payload) {
        return context.dispatch("auth", {
            ...payload,
            mode: "signup",
        });
    },

    logout(context) {
        context.commit("SET_USER", {
            token: null,
            userId: null,
            username: null,
            tokenExpiration: null,
        });

        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("tokenExpiration");
        localStorage.removeItem("username");

        clearTimeout(timer);
    },

    tryLogin(context) {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const username = localStorage.getItem("username");
        const tokenExpiration = localStorage.getItem("tokenExpiration");

        const expiresIn = Number(tokenExpiration) - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(() => {
            context.dispatch("autoLogout");
        }, expiresIn);

        if (token && userId && username) {
            context.commit("SET_USER", {
                token,
                userId,
                username,
            });

            return;
        }
    },

    autoLogout(context) {
        //tento trocar o token: se o token der erro, sai. Se não, continua na aplicação normalmente
        // fetch
        // pego a resposta
        // se status.ok ->
        //coloca o novo token no vuex e no localstorage
        //coloco o novo tokenExpiration no vuex e no localstorage

        context.dispatch("logout");
        context.commit("SET_AUTO_LOGOUT");
    },
};
