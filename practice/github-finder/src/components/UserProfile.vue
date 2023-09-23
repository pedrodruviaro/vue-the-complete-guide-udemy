<template>
    <section v-if="user">
        <div class="container">
            <header>
                <h2>{{ user.name }}</h2>
            </header>

            <main>
                <div class="profile">
                    <div class="image">
                        <img :src="user.avatar_url" :alt="user.name" />
                    </div>
                    <base-button
                        mode="link"
                        target="_blank"
                        :href="user.html_url"
                    >
                        View Profile
                    </base-button>
                </div>
                <div class="infos">
                    <ul>
                        <li>Bio: {{ user.bio }}</li>
                        <li>Location: {{ user.location }}</li>
                        <li>Followers: {{ user.followers }}</li>
                        <li>Following: {{ user.following }}</li>
                    </ul>
                </div>
            </main>
        </div>
    </section>
</template>

<script>
import BaseButton from "./Layout/BaseButton.vue";
export default {
    components: { BaseButton },
    props: ["user"],
};
</script>

<style scoped>
.container {
    border: 1px solid #555;
}

header,
main {
    padding: 1rem;
}

header {
    background-color: #212121;
    border-bottom: 1px solid #444;
}

main {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2rem;
}

.profile {
    display: grid;
}

.image {
    display: grid;
    place-items: center;
    max-width: 9.375rem;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

ul {
    display: grid;
    list-style: none;
    gap: 1rem;
}

li {
    padding: 0.5rem;
    border: 1px solid #777;
}
</style>
