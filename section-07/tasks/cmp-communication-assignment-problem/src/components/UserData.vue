<template>
    <div>
        <h2>USERNAME: {{ username }}</h2>
        <h3>AGE: {{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
};
</script>
