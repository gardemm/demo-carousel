<template>
  <div>
    <h1>Demo carousel</h1>
    <carousel :scrollPerPage="true" :perPageCustom="[[0, 1], [768, 3]]">
      <slide><a href=""><img src="img/1.jpg" class="image"></a></slide>
      <slide><a href=""><img src="img/2.jpg" class="image"></a></slide>
      <slide><a href=""><img src="img/3.jpeg" class="image"></a></slide>
      <slide><a href=""><img src="img/4.jpeg" class="image"></a></slide>
    </carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slides: [

        ]
      }
    }
  }
</script>

<style lang="scss">
  .VueCarousel-slide {
    position: relative;
    min-height: 100px;

    .image{
      width: 300px;
      max-width: 100%;
    }
  }
</style>
