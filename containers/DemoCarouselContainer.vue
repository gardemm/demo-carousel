<template>
  <div>

    <h1>Vue bootstrap carousel live demo:</h1>
    <b-row>

      <!-- FORM VALUES -->
      <!-- MOBILE ITEMS COUNT -->
      <div class="col-6 col-sm-4 col-md-3 col-xl-2">
        <div>Mobile items count:</div>
        <b-form-select v-model="mobileItemsCount" @click.native="changeMobileICount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
        </b-form-select>
      </div>

      <!-- DESKTOP ITEMS COUNT -->
      <div class="col-6 col-sm-4 col-md-3 col-xl-2">
        <div>Desktop items count:</div>
        <b-form-select v-model="desktopItemsCount" @click.native="changeDesktopICount" class="mb-3">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
        </b-form-select>
      </div>

      <!-- SLIDER ITEMS COUNT -->
      <div class="col-12 col-sm-4 col-md-6 col-xl-6">
        <div>Slider items count: {{ sliderItemsCount }}</div>
        <b-form-input v-model="sliderItemsPercentVal" @change.native="changeSliderICount" type="range" class="mb-3">
        </b-form-input>
      </div>
    </b-row>

    <!-- CAROUSEL -->
    <DemoCarousel :mobileItemsCount="mobileItemsCount"
                  :desktopItemsCount="desktopItemsCount"
                  :sliderItems="sliderItems"
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
        sliderItemsPercentVal: 100 / this.$store.state.carousel.sliderItems.length * this.sliderItemsCount,
        sliderItems: this.$store.state.carousel.sliderItems,
        sliderItemsCount: this.$store.state.carousel.sliderItemsCount,
        mobileItemsCount: this.$store.state.carousel.mobileItemsCount,
        desktopItemsCount: this.$store.state.carousel.desktopItemsCount,

        changeMobileICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeMobileItemsCount', this.desktopItemsCount)
          })
        },

        changeDesktopICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeDesktopItemsCount', this.desktopItemsCount)
          })
        },

        changeSliderICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeSliderItemsCount',
              parseInt(this.$store.state.carousel.sliderItems.length / 100 * this.sliderItemsPercentVal) || 1).then(() => {
                this.sliderItemsCount = this.$store.state.carousel.sliderItemsCount;
              });
          })
        },
      }
    }
  }
</script>


