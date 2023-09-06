const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Master Vue!",
            vueLink: "https://vuejs.org",
        };
    },
    methods: {
        outputGoal() {
            return Math.random() < 0.5 ? this.courseGoalA : this.courseGoalB;
        },
    },
});

app.mount("#user-goal");
