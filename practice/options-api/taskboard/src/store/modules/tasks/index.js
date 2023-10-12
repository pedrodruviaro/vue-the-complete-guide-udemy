export default {
    namespaced: true,

    state() {
        return {
            tasks: [],
        };
    },

    getters: {
        tasks(state) {
            return state.tasks;
        },
    },

    mutations: {
        SET_TASKS(state, payload) {
            state.tasks = payload.tasks;
        },

        ADD_TASK(state, payload) {
            state.tasks.push(payload.task);
        },

        REMOVE_TASK(state, payload) {
            const { taskId } = payload;
            const taskIndex = state.tasks.findIndex(
                (task) => task.id === taskId
            );
            state.tasks.splice(taskIndex, 1);
        },
    },

    actions: {
        setTasks(context, payload) {
            context.commit("SET_TASKS", payload.tasks);
        },

        async addTask(context, payload) {
            const userId = context.rootGetters.userId;
            const token = context.rootGetters.token;

            const task = {
                ...payload.task,
                userId,
            };

            const response = await fetch(
                `https://taskboard-8ab70-default-rtdb.firebaseio.com/tasks/${userId}.json?auth=${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                }
            );

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error("Failed to create a task... try again later");
            }

            context.commit("ADD_TASK", {
                task: { ...task, id: responseData.name },
            });
        },

        async getTasks(context) {
            const userId = context.rootGetters.userId;

            const response = await fetch(
                `https://taskboard-8ab70-default-rtdb.firebaseio.com/tasks/${userId}.json`
            );

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch your tasks... try again later"
                );
            }

            let tasks = [];

            for (const key in responseData) {
                const task = {
                    id: key,
                    isPublic: responseData[key].isPublic,
                    task: responseData[key].task,
                };

                tasks.push(task);
            }

            context.commit("SET_TASKS", { tasks });
        },

        async removeTask(context, payload) {
            const taskId = payload.taskId;
            const token = context.rootGetters.token;
            const userId = context.rootGetters.userId;

            const response = await fetch(
                `https://taskboard-8ab70-default-rtdb.firebaseio.com/tasks/${userId}/${taskId}.json?auth=${token}`,
                { method: "DELETE" }
            );

            if (!response.ok) {
                throw new Error("Failed to delete the task");
            }

            context.commit("REMOVE_TASK", { taskId });
        },

        async getSingleTask(context, payload) {
            const taskId = payload.taskId;
            const userId = context.rootGetters.userId;
            const token = context.rootGetters.token;

            const response = await fetch(
                `https://taskboard-8ab70-default-rtdb.firebaseio.com/tasks/${userId}/${taskId}.json?auth=${token}`
            );

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error("Failed to fetch the task... try again later");
            }

            if (responseData) {
                const { task, isPublic } = responseData;

                return { task, isPublic, status: true };
            } else {
                return { status: false };
            }
        },
    },
};
