<template>
    <div>
        <h2>Now reading: {{ nowReading }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        nowReading: {
            type: String,
        },
    },
};
</script>
