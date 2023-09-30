<template>
    <div class="backdrop" @click="$emit('close')" v-if="open"></div>
    <transition name="modal">
        <dialog open v-if="open">
            <slot></slot>
        </dialog>
    </transition>
</template>

<script>
export default {
    props: ["open"],
    emits: ["close"],
};
</script>

<style scoped lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
}

dialog {
    position: fixed;
    top: 30vh;
    width: 96%;
    max-width: 30rem;
    left: 2%;
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1.5rem;
    background-color: white;
    z-index: 100;
    border: none;

    @media (min-width: 30rem) {
        left: calc(50% - 15rem);
    }
}

.modal-enter-active {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.modal-leave-active {
    -webkit-animation: slide-out-right 0.5s
        cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}

@-webkit-keyframes slide-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }
}
@keyframes slide-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }
}
</style>
