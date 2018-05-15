<template>
  <DemoCarousel :mobileItemsCount="mobileItemsCount" :desktopItemsCount="desktopItemsCount"></DemoCarousel>
</template>

<script>
  import DemoCarousel from '~/components/DemoCarousel';

  export default {
    name: 'DemoCarouselContainer',
    props: ['mobileItemsCount', 'desktopItemsCount'],
    components: {
      DemoCarousel
    }
  }
</script>
