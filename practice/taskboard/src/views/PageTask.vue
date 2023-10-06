<template>
    <section>
        <base-container spacing>
            <article v-if="task">{{ task.task }}</article>
        </base-container>
    </section>
</template>

<script>
export default {
    props: ["id"],

    data() {
        return {
            task: null,
        };
    },

    async created() {
        const response = await this.$store.dispatch("tasks/getSingleTask", {
            taskId: this.id,
        });

        if (!response.status) {
            this.$router.replace("/dashboard");
        }

        this.task = response;
    },
};
</script>

<style lang="scss" scoped>
section {
    background-color: var(--clr-neutral-100);
    height: 100%;
}

article {
    border: 1px solid var(--clr-neutral-500);
    background-color: var(--clr-neutral-100);
    padding: 1rem;
    color: var(--clr-neutral-700);
    border-radius: var(--b-radius);
}
</style>
