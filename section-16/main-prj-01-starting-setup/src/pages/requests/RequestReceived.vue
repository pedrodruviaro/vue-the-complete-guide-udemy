<template>
  <div>
    <base-dialog :show="!!error" @close="handleError" title="An error occured...">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>

        <base-spinner v-if="isLoading" />

        <ul v-else-if="!isLoading && hasRequests">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :message="request.message"
            :email="request.userEmail"
          />
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: { RequestItem },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something Failed';
      } finally {
        this.isLoading = false;
      }
    },

    handleError() {
      this.error = null;
    },
  },

  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
