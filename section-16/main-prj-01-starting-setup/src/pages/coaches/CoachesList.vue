<template>
  <div>
    <base-dialog :show="!!error" @close="handleError" title="An error occured...">
      <p>{{ error }}</p>
    </base-dialog>

    <coach-filter @changeFilter="setFilter" />
    <section>
      <base-card>
        <div class="controls">
          <base-button @click="loadCoaches(true)">Refresh</base-button>
          <base-button :link="true" mode="outline" to="/register" v-if="!isCoach && !isLoading"
            >Register as Coach</base-button
          >
        </div>

        <div v-if="isLoading">
          <base-spinner />
        </div>

        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          />
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem, CoachFilter },

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },

      isLoading: false,
      error: null,
    };
  },

  computed: {
    filteredCoaches() {
      const allCoaches = this.$store.getters['coaches/coaches'];

      return allCoaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },

    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches(forceFetch = false) {
      try {
        this.error;
        this.isLoading = true;
        await this.$store.dispatch('coaches/loadCoaches', { forceFetch: forceFetch });
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || 'Somethin Went Wrong';
      } finally {
        this.isLoading = false;
      }
    },

    handleError() {
      this.error = null;
    },
  },

  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
