<template>
  <div class="section">
    <iframe
      width="100%"
      height="400"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAF5lZ8IdyelPAgj70SLqwpw_X1vseCJsU&q=place_id:ChIJzTK2ig7cQUcRwuVSLwU1k7w"
      allowfullscreen
    >
    </iframe>
  </div>
</template>
<script>
import gmapsInit from '../utils/gmaps';

export default {
  name: 'ContactMap',

  data() {
    return {
      selectedQuestion: '',
      center: { lat: 47.511425, lng: 19.052229 }
    };
  },

  async mounted() {
    // try {
    //   const google = await gmapsInit();
    //   const map = new google.maps.Map(this.$el);
    //   map.setCenter(this.center);
    //   map.setZoom(16);
    //   var marker = new google.maps.Marker({
    //     position: this.center,
    //     map: map,
    //     title: 'Hello World!'
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  }
};
</script>
<style lang="scss" scoped>
.section {
  margin-top: 50px;
  height: 400px;
}
</style>
