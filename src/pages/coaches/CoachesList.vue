<template>
  <section>Filter coach based on experience</section>
  <section>
    List of coaches
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasCoaches">
      <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li> -->
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-item>
    </ul>
    <h3 v-else>No data found</h3>
  </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: { CoachItem },
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
