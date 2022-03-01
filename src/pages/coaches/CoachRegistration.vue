<template>
  Register Here
  <section>
    <base-card>
      <h2>Register as a coach now.</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },

  methods: {
    saveData(data) {
      // namespace/actions,data
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$router.push('/coaches')
      //push or replace method on router
      this.$router.replace('/coaches');
    },
  },
};
</script>
