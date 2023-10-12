<template>
    <div>
        <base-modal fixed :show="loading">
            <div>
                <base-loader />
            </div>
        </base-modal>

        <base-modal fixed :show="error && !loading">
            <p>{{ error }}</p>
        </base-modal>

        <section>
            <base-container :spacing="true">
                <h2>Qual sua tarefa?</h2>
                <form @submit.prevent="newTask">
                    <textarea required rows="8" v-model="task"></textarea>
                    <label>
                        <input type="checkbox" v-model="isPublic" />
                        Deixar tarefa pública
                    </label>
                    <base-button type="submit">Registrar</base-button>
                </form>
            </base-container>
        </section>

        <section class="tasks">
            <base-container spacing>
                <h2>Minhas Tarefas</h2>
                <ul>
                    <task-item
                        v-for="task in tasks"
                        :key="task.id"
                        :task="task"
                        @loading="handleLoading"
                    /></ul
            ></base-container>
        </section>
    </div>
</template>

<script>
import BaseLoader from "../components/layout/BaseLoader.vue";
import BaseModal from "../components/layout/BaseModal.vue";
import TaskItem from "../components/dashboard/TaskItem.vue";

export default {
    components: { BaseLoader, BaseModal, TaskItem },

    data() {
        return {
            task: "",
            isPublic: false,

            loading: false,
            error: false,
        };
    },

    computed: {
        tasks() {
            return this.$store.getters["tasks/tasks"];
        },
    },

    async created() {
        this.loading = true;

        try {
            await this.$store.dispatch("tasks/getTasks");
        } catch (error) {
            this.error = "Failed to fetch tasks. Try again later";
        } finally {
            this.loading = false;
        }
    },

    methods: {
        async newTask() {
            try {
                this.loading = true;
                this.error = false;

                await this.$store.dispatch("tasks/addTask", {
                    task: { task: this.task, isPublic: this.isPublic },
                });
            } catch (error) {
                this.error = "Failed to create a task. Try again later";
            } finally {
                this.loading = false;
            }
        },

        handleLoading(event) {
            this.loading = event;
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 1rem;
}

form {
    display: grid;
    gap: 1rem;
    accent-color: var(--clr-accent-primary);

    textarea {
        padding: 1rem;
        resize: none;
    }
}

.tasks {
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-700);

    h2 {
        text-align: center;
    }
}

ul {
    display: grid;
    gap: 1rem;
}
</style>
