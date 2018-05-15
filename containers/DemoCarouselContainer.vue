<template>
  <div>

    <h1>Demo carousel</h1>
    <b-row>

      <!-- FORM VALUES -->
      <!-- MOBILE ITEMS COUNT -->
      <b-col cols="2">
        <div>Mobile items count:</div>
        <b-form-select v-model="mobileItemsCount" @click.native="changeMobileICount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
        </b-form-select>
      </b-col>

      <!-- DESKTOP ITEMS COUNT -->
      <b-col cols="2">
        <div>Desktop items count:</div>
        <b-form-select v-model="desktopItemsCount" @click.native="changeDesktopICount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
        </b-form-select>
      </b-col>

      <!-- SLIDER ITEMS COUNT -->
      <b-col cols="2">
        <div>Slider items count: {{ sliderItemsCount }}</div>
        <b-form-input v-model="sliderItemsPercentVal" @change.native="changeSliderICount" type="range" class="mb-3">
        </b-form-input>
      </b-col>
    </b-row>

    <!-- CAROUSEL -->
    <DemoCarousel :mobileItemsCount="mobileItemsCount"
                  :desktopItemsCount="desktopItemsCount"
                  :sliderItemsCount="sliderItemsCount"></DemoCarousel>

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
        sliderItemsCount: this.$store.state.carousel.sliderItemsCount,
        sliderItemsPercentVal: 100 / this.$store.state.carousel.itemsCount * this.sliderItemsCount,
        mobileItemsCount: this.$store.state.carousel.mobileItemsCount,
        desktopItemsCount: this.$store.state.carousel.desktopItemsCount,

        changeMobileICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeMobileItemsCount', this.desktopItemsCount)
          })
        },

        changeDesktopICount: function (state, val) {
          this.$nextTick(function () {
            this.$store.dispatch('changeDesktopItemsCount', this.desktopItemsCount)
          })
        },

        changeSliderICount: function (state, val) {
          this.$nextTick(function () {
            this.$store.dispatch('changeSliderItemsCount',
              parseInt(this.$store.state.carousel.itemsCount / 100 * this.sliderItemsPercentVal) || 1)
            this.sliderItemsCount = this.$store.state.carousel.sliderItemsCount;
          })
        },
      }
    }
  }
</script>
