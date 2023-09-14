<template>
    <div class="myapp">
        <h1>Task</h1>
        <div>
            <active-user
                @change-username="handleChangeUsername"
                @change-age="handleChangeAge"
            ></active-user>
            <br />
            <user-data :username="this.username" :age="this.age"></user-data>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 0,
            username: "",
        };
    },

    methods: {
        handleChangeUsername(newUsername) {
            this.username = newUsername;
        },

        handleChangeAge(newAge) {
            this.age = Number(newAge);
        },
    },
};
</script>

<style>
body {
    background: #212121;
    color: white;
    font-family: sans-serif;
}

.myapp {
    display: grid;
    margin-inline: auto;
    justify-items: center;
    padding-block: 4rem;
}

input {
    display: block;
}
</style>
