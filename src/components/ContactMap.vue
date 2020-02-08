<template>
  <div class="section">
    
  </div>
</template>
<script>
import gmapsInit from '../utils/gmaps';

export default {
  name: 'ContactMap',

  data () {
    return {
      selectedQuestion: '',
      center: { lat: 47.511425, lng: 19.052229 }
    }
  },

  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        console.log(map);

        map.setCenter(this.center);
        map.setZoom(16);
        /* map.fitBounds(); */
      });
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  margin-top: 50px;
  height: 400px;
}

</style>