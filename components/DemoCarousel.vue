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

    // кнопки навигации по краям
    .VueCarousel-navigation-button {
      font-size: 5rem;
      top: 40% !important;
    }

    // их анимация
    $padding-animation: 13px;

    // слева
    .VueCarousel-navigation-prev:not(.VueCarousel-navigation--disabled) {
      padding-right: 0;
      transition: padding-right 0.5s ease;
      &:hover {
         padding-right: $padding-animation !important;
      }
    }

    // справа
    .VueCarousel-navigation-next:not(.VueCarousel-navigation--disabled) {
      padding-left: 0;
      transition: padding-left 0.5s ease;
      &:hover {
        padding-left: $padding-animation !important;
      }
    }

    // точка снизу
    .VueCarousel-dot {

      @keyframes shake {
        0% {
          transform: scale(1);
        }

        20% {
          transform: scale(0.8);
        }

        40% {
          transform: scale(2);
        }
        70% {
          transform: scale(0.8);
        }

        100% {
          transform: scale(1);
        }
      }

      // transition: all 0.6s ease;
      // когда активна
      &.VueCarousel-dot--active {
        animation: shake 0.4s cubic-bezier(.36, .07, .19, .97) both;
        // transform: scale(2);
      }
    }
  }

</style>
