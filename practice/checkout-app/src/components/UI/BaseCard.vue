<template>
    <div>
        <header>
            <slot name="title"></slot>
        </header>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    background-color: #fff;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 10px;
}

header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 2rem;
    text-align: center;
    padding-bottom: 0.75rem;
}
</style>
