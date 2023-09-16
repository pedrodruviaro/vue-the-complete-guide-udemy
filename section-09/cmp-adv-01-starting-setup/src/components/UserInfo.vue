<template>
    <section>
        <BaseCard>
            <template v-slot:header>
                <h3>{{ fullName }}</h3>
                <base-badge
                    :type="role"
                    :caption="role.toUpperCase()"
                ></base-badge>
            </template>
            <template v-slot:default>
                <p>{{ infoText }}</p>
            </template>
        </BaseCard>
    </section>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";

export default {
    components: { BaseCard },
    props: ["fullName", "infoText", "role"],
};
</script>
