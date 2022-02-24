<template>
  <section>
    Filter coach based on experience
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <!-- <router-link to="/register">Register</router-link> -->
        <!--props:here link is true -->
        <base-button v-if="!isCoach" link to="/register"
          >Register as coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        List of coaches
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
  </base-card>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coachesGetter'];
      // filter method
      return coaches.filter((coach) => {
        // includes built in method
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updateFilters) {
      this.activeFilters = updateFilters;
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
