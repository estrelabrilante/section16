<template>
  <section>Filter coach based on experience</section>
  <section>
    List of coaches
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoach" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No data found</h3>
  </section>
</template>
<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coachesGetter'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
