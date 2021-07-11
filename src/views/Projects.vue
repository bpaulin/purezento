<template>
  <div class="Projects">
    <h1>Projects</h1>
    <ProjectsList
      :currentProject="currentProject"
      v-on:changeCurrentProject="currentProject = $event"
    />
    <ProjectsDetails :currentProject="currentProject" />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectsDetails from "@/components/ProjectsDetails.vue";
export default {
  components: {
    ProjectsList,
    ProjectsDetails,
  },

  data() {
    return {
      currentProject: null,
    };
  },
};
</script>
