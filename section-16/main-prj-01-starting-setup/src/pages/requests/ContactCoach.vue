<template>
  <div>
    <base-dialog :show="!!error" @close="handleCloseModalError" title="Failed to contact the coach">
      <p>{{ error }}</p>
    </base-dialog>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">
          Your E-mail
          <input type="email" id="email" v-model.trim="email" />
        </label>
      </div>

      <div class="form-control">
        <label for="message">
          Message
          <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </label>
      </div>

      <p v-if="!formIsValid" class="errors">Please enter a valid email and non-empty message.</p>

      <div class="actions">
        <base-spinner v-if="isLoading" />
        <base-button v-else>Send Message</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,

      error: null,
      isLoading: false,
    };
  },

  methods: {
    async submitForm() {
      this.formIsValid = true;

      if (this.email === '' || !this.email.includes('@' || this.message === '')) {
        this.formIsValid = false;
        return;
      }

      const newRequest = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };

      try {
        this.isLoading = true;

        await this.$store.dispatch('requests/contactCoach', newRequest);

        this.$router.push('/coaches');
      } catch (error) {
        this.error = error.message || 'Failed to contact';
      } finally {
        this.isLoading = false;
      }
    },

    handleCloseModalError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
