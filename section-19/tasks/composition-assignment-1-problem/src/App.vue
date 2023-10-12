<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{ title }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleIsMainGoalVisible">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      title: 'Learn vuejs',
    };
  },

  methods: {
    toggleIsMainGoalVisible() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<!-- <script setup>
import { reactive } from 'vue';

// const mainGoal = ref('Learn Vue!');
// const isMainGoalVisible = ref(true);

const goal = reactive({
  title: 'Lear professional vue!',
  visible: false,
});

function toggleIsMainGoalVisible() {
  goal.visible = !goal.visible;
}
</script> -->

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
