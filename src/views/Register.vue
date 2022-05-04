<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('name')">
            <label for="email">Name</label>
            <md-input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              v-model="form.name"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.name.required"
              >The name is required</span
            >
          </md-field>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required"
              >The email is required</span
            >
            <span class="md-error" v-else-if="!$v.form.email.email"
              >Invalid email</span
            >
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input
              type="password"
              name="password"
              id="password"
              autocomplete="password"
              v-model="form.password"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.password.required"
              >The password is required</span
            >
            <span class="md-error" v-else-if="!$v.form.password.minLength"
              >Invalid password</span
            >
          </md-field>

          <md-field :class="getValidationClass('confirmPassword')">
            <label for="password">Password</label>
            <md-input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autocomplete="password"
              v-model="form.confirmPassword"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.confirmPassword.required"
              >The password is required</span
            >
            <span class="md-error" v-else-if="!$v.form.confirmPassword.sameAsPassword"
              >passwords don't match</span
            >
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Register</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      email: null,
      password: null,
      confirmPassword:  null
    },
    userSaved: false,
    // sending: false,
    lastUser: null,
  }),

  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
      },
      email: {
        required,
        email,
      },
      confirmPassword: {
        required,
         sameAsPassword: sameAs('password')
      },
      name: {
        required,
      }
    },

  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },

    clearForm() {
      this.$v.$reset();
      this.form.password = null;
      this.form.confirmPassword = null;
      this.form.email = null;
    },

    saveUser() {
      this.$store.dispatch("signup", {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name,
      });
    },

    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
        // this.clearForm();
      }
    },
  },
 
  computed: {
    sending() {
     return this.$store.state.auth.sending
    },
  },
};
</script>

<style  scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>