<template>
    <section class="container spacing">
        <page-title>Find Player</page-title>

        <div class="split">
            <div>
                <find-form
                    @findPlayer="handleFindPlayer"
                    :currentPlayer="currentPlayer"
                ></find-form>
            </div>
            <div>
                <found-player
                    v-if="currentPlayer"
                    :player="currentPlayer"
                ></found-player>
            </div>
        </div>
    </section>
</template>

<script>
import FindForm from "../find/FindForm.vue";
import FoundPlayer from "../find/FoundPlayer.vue";
import PageTitle from "../UI/PageTitle.vue";

export default {
    components: { FindForm, FoundPlayer, PageTitle },

    data() {
        return {
            currentPlayer: null,
            searchOtherTrigger: false,
        };
    },

    methods: {
        handleFindPlayer(player) {
            this.currentPlayer = player;
        },
    },
};
</script>

<style scoped>
.split {
    display: grid;
    gap: 2rem;
}
</style>
