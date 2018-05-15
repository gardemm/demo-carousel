<template>
  <div>

    <h1>Demo carousel</h1>
    <b-row>

      <!-- FORM VALUES -->
      <!-- MOBILE ITEMS COUNT -->
      <b-col cols="2">
        <div>Mobile items count:</div>
        <b-form-select @click.native="changeMobileICount" v-model="mobileItemsCount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
        </b-form-select>
      </b-col>

      <!-- DESKTOP ITEMS COUNT -->
      <b-col cols="2">
        <div>Desktop items count:</div>
        <b-form-select @click.native="changeDesktopICount" v-model="desktopItemsCount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
        </b-form-select>
      </b-col>
    </b-row>

    <!-- CAROUSEL -->
    <DemoCarousel :mobileItemsCount="mobileItemsCount" :desktopItemsCount="desktopItemsCount"></DemoCarousel>

  </div>
</template>

<script>
  import DemoCarousel from '~/components/DemoCarousel';

  export default {
    name: 'DemoCarouselContainer',
    components: {
      DemoCarousel
    },
    data () {
      return {
        mobileItemsCount: this.$store.state.carousel.mobileItemsCount,
        desktopItemsCount: this.$store.state.carousel.desktopItemsCount,

        changeMobileICount: function () {
          this.$store.dispatch('changeMobileItemsCount', this.desktopItemsCount)
        },

        changeDesktopICount: function (state, val) {
          this.$store.dispatch('changeDesktopItemsCount', this.desktopItemsCount)
        },
      }
    }
  }
</script>
