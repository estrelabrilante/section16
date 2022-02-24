<template>
  <!-- <section> -->
  <!-- Details of coach  Child component:ContactCoach... router-view in parent -->
  <!-- component: CoachDetails -->
  <!-- <router-view></router-view>
    <router-link to="/coaches/c1/contact">Contact</router-link>
  </section> -->

  <section>
    Details of each coaches
    <base-card>
      <h2>
        {{ fullName }}
      </h2>
      <h3>${{ rate }} /hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested Reach out now</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
      </base-badge>
      <p>
        {{ description }}
      </p>
    </base-card>
  </section>
</template>
<script>
export default {
  // loaded through routing ,as no props passes by router in default but
  // if props: true in router.js then dynamic value is passed into that component as props.
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  //created lifecycle hook
  created() {
    this.selectedCoach = this.$store.getters['coaches/coachesGetter'].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + '' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },
};
</script>
