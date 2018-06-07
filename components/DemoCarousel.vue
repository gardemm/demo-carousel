<template>
  <no-ssr>
    <carousel :scrollPerPage="true" :navigation-enabled="true" paginationActiveColor="#4aa3b8"
              navigationNextLabel="&#8250;" navigationPrevLabel="&#8249;"
              :perPageCustom="[[0, mobileItemsCount], [768, desktopItemsCount]]">
      <slide v-for="(item, index) in parseInt(sliderItemsCount)" :key="'slide-' + index">
        <a href="">
          <img :src="'https://loremflickr.com/300/300/dog?random=' + index" class="image">
        </a>
      </slide>
    </carousel>
  </no-ssr>
</template>

<script>
  export default {
    name: 'DemoCarousel',
    props: ['mobileItemsCount', 'desktopItemsCount' , 'sliderItemsCount']
  }
</script>

<style lang="scss">
  .VueCarousel {
    text-align: center;

    .VueCarousel-navigation-button {
      font-size: 5rem;
      top: 40% !important;
    }
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
