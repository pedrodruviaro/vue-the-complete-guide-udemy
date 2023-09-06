Vue.createApp({
    data: function () {
        return {
            firstInput: "",
            secondInput: "",
        };
    },

    methods: {
        showAlert: function () {
            alert("CLICK");
        },

        handleFirstInput: function ({ target }) {
            this.firstInput = target.value;
        },

        handleSecondInput: function ({ target }) {
            this.secondInput = target.value;
        },
    },
}).mount("#assignment");
