<template>
  <div class="section">
    <gmap-map
      :center="center"
      :zoom="16"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :position="center"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
<script>
export default {
  name: 'ContactMap',

  data () {
    return {
      selectedQuestion: '',
      center: { lat: 47.511425, lng: 19.052229 }
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  margin-top: 50px;
}

</style>