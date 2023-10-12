<template>
    <the-header />
    <search-user @find-user="handleFindUser" />
    <user-profile :user="user" />
</template>

<script>
import SearchUser from "./components/SearchUser.vue";
import TheHeader from "./components/UI/TheHeader.vue";
import UserProfile from "./components/UserProfile.vue";
export default {
    components: { TheHeader, SearchUser, UserProfile },

    data() {
        return {
            user: null,
        };
    },

    methods: {
        handleFindUser(user) {
            return user ? (this.user = user) : (this.user = null);
        },
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #1c2128;
    color: #fefefe;
    font-family: sans-serif;
}

input,
button {
    font: inherit;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: min(100% - 2rem, 70rem);
    margin-inline: auto;
}
</style>
