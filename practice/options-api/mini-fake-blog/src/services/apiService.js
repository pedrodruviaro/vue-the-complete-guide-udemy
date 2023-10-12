// apiService.js

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default {
    async getPosts() {
        try {
            const response = await fetch(`${BASE_URL}/posts`);

            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const postsData = await response.json();
            return postsData;
        } catch (error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        }
    },

    async getAuthors() {
        try {
            const response = await fetch(`${BASE_URL}/users`);

            if (!response.ok) {
                throw new Error("Failed to fetch authors");
            }

            const authorsData = await response.json();
            return authorsData;
        } catch (error) {
            throw new Error(`Error fetching authors: ${error.message}`);
        }
    },
};
