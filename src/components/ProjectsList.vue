<template>
  <div>
    <v-btn
      v-for="project in projects"
      v-bind:key="project.id"
      v-on:click="$emit('changeCurrentProject', project)"
      >{{ project.name }}</v-btn
    >
    {{ project }}
    <v-btn v-on:click="addProject">addProject</v-btn>
  </div>
</template>

<script>
import { db } from "@/db";
export default {
  props: ["currentProject"],

  data: () => ({ projects: [] }),

  firestore: {
    projects: db.collection("projects"),
  },

  methods: {
    addProject: function () {
      db.collection("projects").add({
        name: "Noel 2020",
        members: [
          {
            name: "papa",
            email: "papa@purezento.net",
          },
          {
            name: "mama",
            email: "mama@purezento.net",
          },
        ],
      });
    },
  },
};
</script>
