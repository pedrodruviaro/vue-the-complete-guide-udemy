<template>
    <article>
        <div class="profile">
            <div class="image">
                <img :src="player.photoUrl" alt="" />
            </div>
            <base-button :disabled="loading" @click="addToTeam"
                >Add to team</base-button
            >

            <p v-if="isError">{{ isError }}</p>
        </div>
        <div class="infos">
            <p><strong>Name:</strong> {{ showFullName }}</p>
            <p><strong>Nationality:</strong> {{ player.nationality }}</p>
            <p><strong>Location:</strong> {{ showFullLocation }}</p>
            <p><strong>Username:</strong> {{ player.username }}</p>
            <p><strong>Playing since</strong> {{ showPlayerSince }}</p>
            <p><strong>Role:</strong> {{ player.role }}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: ["player"],

    data() {
        return {
            loading: false,
            isError: false,
        };
    },

    computed: {
        showFullName() {
            return `${this.player.name} ${this.player.lastName}`;
        },
        showFullLocation() {
            return `${this.player.location.city} - ${this.player.location.country}`;
        },
        showPlayerSince() {
            return new Date(this.player.playerSince).toLocaleDateString("en");
        },
    },

    methods: {
        async addToTeam() {
            try {
                this.loading = true;
                this.isError = false;

                const response = await fetch(
                    "https://vue-http-demo-260cc-default-rtdb.asia-southeast1.firebasedatabase.app/my-team.json",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(this.player),
                    }
                );

                if (!response.ok || !response) {
                    throw new Error("Something went wrong... try again later");
                }
            } catch (error) {
                this.isError = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
article {
    border: 1px solid #333;
    padding: 1rem;
    background-color: #fff;
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 2rem;
}

.profile {
    display: grid;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.infos {
    display: grid;
    gap: 0.25rem;
}
</style>
