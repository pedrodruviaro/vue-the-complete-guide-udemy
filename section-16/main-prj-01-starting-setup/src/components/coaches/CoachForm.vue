<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input @blur="clearValidity('firstName')" type="text" id="firstname" v-model.trim="firstName.value" />
      <p v-if="!firstName.isValid">Firstname must not be empty</p>
    </div>

    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input @blur="clearValidity('lastName')" type="text" id="lastname" v-model.trim="lastName.value" />
      <p v-if="!lastName.isValid">Lastname must not be empty</p>
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        @blur="clearValidity('description')"
        type="text"
        id="description"
        rows="5"
        v-model.trim="description.value"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty</p>
    </div>

    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input @blur="clearValidity('rate')" type="number" id="rate" v-model.number="rate.value" />
      <p v-if="!rate.isValid">Rate must be greater than zero</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input @blur="clearValidity('areas')" type="checkbox" id="frontend" value="frontend" v-model="areas.value" />
        <label for="frontend">Frontend</label>
      </div>

      <div>
        <input @blur="clearValidity('areas')" type="checkbox" id="backend" value="backend" v-model="areas.value" />
        <label for="backend">Backend</label>
      </div>

      <div>
        <input @blur="clearValidity('areas')" type="checkbox" id="career" value="career" v-model="areas.value" />
        <label for="career">Career</label>
      </div>

      <p v-if="!areas.isValid">Select at least one area</p>
    </div>

    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>

    <base-button type="submit">Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: { value: '', isValid: true },
      lastName: { value: '', isValid: true },
      description: { value: '', isValid: true },
      rate: { value: null, isValid: true },
      areas: { value: [], isValid: true },
      formIsValid: true,
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;

      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }

      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }

      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }

      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }

      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        first: this.firstName.value,
        last: this.lastName.value,
        desc: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value,
      };

      this.$emit('saveData', formData);
    },
  },

  emits: ['saveData'],
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
