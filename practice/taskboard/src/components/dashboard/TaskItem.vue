<template>
    <li>
        <header>
            <span :class="{ [taskType.class]: true }">{{
                taskType.label
            }}</span>
            <button
                @click="goToTask(taskPath)"
                v-if="taskType.class === 'public'"
            >
                <ph-arrow-bend-up-right
                    :size="20"
                    color="var(--clr-neutral-700)"
                />
            </button>
        </header>
        <main>
            <p>{{ task.task }}</p>

            <button @click="removeTask(task.id)">
                <ph-trash :size="32" color="#FF8690" />
            </button>
        </main>
    </li>
</template>

<script>
import { PhTrash, PhArrowBendUpRight } from "@phosphor-icons/vue";

export default {
    components: { PhTrash, PhArrowBendUpRight },

    props: {
        task: {
            type: Object,
            required: true,
        },
    },

    computed: {
        taskPath() {
            return "/tasks/" + this.task.id;
        },

        taskType() {
            return {
                label: this.task.isPublic ? "Pública" : "Privada",
                class: this.task.isPublic ? "public" : "private",
            };
        },
    },

    methods: {
        goToTask(path) {
            this.$router.push(path);
        },

        async removeTask(taskId) {
            const token = this.$store.getters.token;
            const userId = this.$store.getters.userId;
            this.$emit("loading", true);

            try {
                const response = await fetch(
                    `https://taskboard-8ab70-default-rtdb.firebaseio.com/tasks/${userId}/${taskId}.json?auth=${token}`,
                    { method: "DELETE" }
                );

                if (!response.ok) {
                    throw new Error("Failed to delete the task");
                }
            } catch (error) {
                this.$emit(
                    "error",
                    "Failed to remove the task. Try again later"
                );
            } finally {
                this.$emit("loading", false);
            }

            this.$store.commit("tasks/REMOVE_TASK", { taskId });
        },
    },

    emits: ["loading", "loadingEnd", "error"],
};
</script>

<style lang="scss" scoped>
li {
    border: 1px solid var(--clr-neutral-500);
    padding: 1rem;
    border-radius: var(--b-radius);
    display: grid;
    gap: 1rem;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            background-color: var(--clr-accent-secondary);
            border-radius: var(--b-radius);
            padding: 0.25rem 0.5rem;
            font-size: 0.9rem;
            font-weight: 600;

            &.private {
                background-color: var(--clr-accent-primary);
            }
        }
    }

    main {
        display: grid;
        grid-template-columns: 1fr max-content;
        gap: 1rem;
    }
}
</style>
