<template>
  <v-form v-model="valid" ref="form">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="currentProject.name"
          :counter="30"
          label="Name"
          required
        ></v-text-field> </v-col
    ></v-row>
    <p>Participants</p>
    <template> </template>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  props: ["currentProject"],
  data: () => ({
    valid: true,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
