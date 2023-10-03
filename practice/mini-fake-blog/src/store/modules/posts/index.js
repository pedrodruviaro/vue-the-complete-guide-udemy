export default {
    namespaced: true,

    state() {
        return {
            posts: [],
        };
    },

    getters: {
        posts(state) {
            return state.posts;
        },

        postsPreviews(state, _, _2, rootGetters) {
            const posts = [];
            const authors = rootGetters["authors/authors"];

            state.posts.forEach((post) => {
                const { userId } = post;

                const postAuthor = authors.find(
                    (author) => author.id === userId
                );

                const previewPost = {
                    id: post.id,
                    title: post.title,
                    author: { id: postAuthor.id, name: postAuthor.name },
                };

                posts.push(previewPost);
            });

            return posts;
        },

        postById: (state) => (id) => {
            const posts = state.posts.find((post) => post.id === id);

            return posts;
        },

        postsFromAuthor: (state) => (authorId) => {
            const posts = state.posts.filter(
                (post) => post.userId === authorId
            );
            return posts;
        },

        postsQuery: (state, _, _2, rootGetters) => (query) => {
            const posts = state.posts;

            const filteredPosts = [];

            posts.forEach((post) => {
                if (post.body.includes(query)) {
                    const authorId = Number(post.userId);
                    const author = rootGetters["authors/authorById"](authorId);

                    const obj = {
                        ...post,
                        author,
                    };

                    filteredPosts.push(obj);
                }
            });

            return filteredPosts;
        },
    },

    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
    },

    actions: {
        setPosts(context, payload) {
            const postsArray = payload;

            context.commit("SET_POSTS", postsArray);
        },
    },
};
