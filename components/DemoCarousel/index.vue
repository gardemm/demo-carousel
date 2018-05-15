<template>
  <carousel :scrollPerPage="true" :perPageCustom="[[0, mobileItemsCount], [768, desktopItemsCount]]">
    <slide v-for="(item, index) in sliderItemsCount" :key="'slide' + index"><a href=""><img src="img/1.jpg" class="image"></a></slide>
    <!--<slide><a href=""><img src="img/2.jpg" class="image"></a></slide>-->
    <!--<slide><a href=""><img src="img/3.jpeg" class="image"></a></slide>-->
    <!--<slide><a href=""><img src="img/4.jpeg" class="image"></a></slide>-->
    <!--<slide><a href=""><img src="img/5.jpeg" class="image"></a></slide>-->
    <!--<slide><a href=""><img src="img/6.jpeg" class="image"></a></slide>-->
    <!--<slide><a href=""><img src="img/7.png" class="image"></a></slide>-->
  </carousel>
</template>

<script>
  export default {
    name: 'DemoCarousel',
    props: ['mobileItemsCount', 'desktopItemsCount' , 'sliderItemsCount']
  }
</script>

<style lang="scss" scoped>
  .VueCarousel {
    text-align: center;
  }

  .VueCarousel-slide {
    position: relative;
    min-height: 100px;

    .image{
      width: 300px;
      max-width: 100%;
    }
  }
</style>
