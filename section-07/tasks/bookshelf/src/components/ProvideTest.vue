<!-- TESTE -->
<template>
    <div>
        <h2>Inject</h2>
        <ol>
            <li v-for="book in books" v-bind:key="book.id">
                <h6>{{ book.name }}</h6>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    inject: ["books"],
};
</script>
