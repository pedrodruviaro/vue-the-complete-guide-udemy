<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="3" id="description" name="description" ref="description"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="link" />
      </div>

      <div>
        <base-button type="submit"> Add Resource </base-button>
      </div>
    </form>

    <base-dialog @close="confirmErrorMessage" title="Invalid Input" v-if="isInputInvalid">
      <template #default>
        <p>Unfortunately, at least one input value is invalid</p>
        <p>Please check all inputs and make sure you enter a few content</p>
      </template>
      <template #actions>
        <base-button @click="confirmErrorMessage">Okay</base-button>
      </template>
    </base-dialog>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],

  data() {
    return {
      isInputInvalid: false,
    };
  },

  methods: {
    submitData() {
      const enteredTitle = this.$refs.title.value;
      const enteredDescription = this.$refs.description.value;
      const enteredLink = this.$refs.link.value;

      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
        this.isInputInvalid = true;
        return;
      }

      this.isInputInvalid = false;
      this.addResource({ enteredTitle, enteredDescription, enteredLink });
    },

    confirmErrorMessage() {
      this.isInputInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
