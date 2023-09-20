<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>

      <p v-if="isLoading && !error">Loading...</p>

      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stores experiences found. Start adding some data fist!
      </p>

      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },

  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch(
          'https://vue-http-demo-260cc-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
        );

        if (response.ok) {
          const data = await response.json();

          const results = [];
          for (const id in data) {
            results.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }

          this.results = results;
        }
      } catch (error) {
        this.error = 'Failed to fetch data... please try again later';
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
