<template>
    <section>
        <base-container spacing>
            <h1>Sistema feito para você organizar seus estudos e terefas</h1>
            <div class="buttons">
                <base-button mode="secondary">+ 7mil posts</base-button>
                <base-button mode="secondary">+ 1 mil comentários</base-button>
            </div>
        </base-container>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    font-size: 2.25rem;
    line-height: 1.2;
    max-width: 30ch;
    margin-inline: auto;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
}
</style>
