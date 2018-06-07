<template>
  <no-ssr>
    <carousel :scrollPerPage="true" :perPageCustom="[[0, mobileItemsCount], [768, desktopItemsCount]]">
      <slide v-for="(item, index) in sliderItems.slice(0, parseInt(sliderItemsCount))" :key="'slide-' + index">
        <a href="">
          <img :src="'img/'+ item" class="image">
        </a>
      </slide>
    </carousel>
  </no-ssr>
</template>

<script>
  export default {
    name: 'DemoCarousel',
    props: ['mobileItemsCount', 'desktopItemsCount' , 'sliderItems', 'sliderItemsCount']
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
