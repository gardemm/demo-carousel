<template>
    <div>

        <h1>Vue bootstrap <span class="topic">carousel</span></h1>
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

                <!-- обработчики работают на внешнем элементе -->
                <div v-on:mousedown="startDrag" v-on:mousemove="doDrag">
                    <b-form-input v-model="sliderItemsPercentVal" @change.native="changeSliderICount" type="range" class="mb-3">
                    </b-form-input>
                </div>
            </div>
        </b-row>

         <!--CAROUSEL -->
        <DemoCarousel :mobileItemsCount="mobileItemsCount"
                      :desktopItemsCount="desktopItemsCount"
                      :sliderItemsCount="sliderItemsCount"></DemoCarousel>

    </div>
</template>

<script>
  import DemoCarousel from '~/components/DemoCarousel'

  export default {
    name: 'DemoCarouselContainer',
    components: {
      DemoCarousel
    },
    mounted () {
      window.addEventListener('mouseup', this.stopDrag)
    },
    beforeDestroy() {
      window.removeEventListener('mouseup', this.stopDrag)
    },
    methods: {
    },
    data () {
      return {
        // флаг, что осуществляем прокрутку слайдера
        dragging: false,

        sliderItemsPercentVal: 100 / this.$store.state.carousel.allItemsCount * this.sliderItemsCount,
        sliderItemsCount: this.$store.state.carousel.sliderItemsCount,
        mobileItemsCount: this.$store.state.carousel.mobileItemsCount,
        desktopItemsCount: this.$store.state.carousel.desktopItemsCount,

        // --- slider drag force updater
        startDrag: () => {
          this.dragging = true
        },

        stopDrag: () => {
          this.dragging = false
        },

        doDrag: () => {
          if (this.dragging) {
            this.changeSliderICount()
          }
        },
        // --- slider events

        // Изменить количество отображаемых слайдов для мобильника
        changeMobileICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeMobileItemsCount', this.desktopItemsCount)
          })
        },

        // Изменить количество отображаемых слайдов для десктопного расширения
        changeDesktopICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeDesktopItemsCount', this.desktopItemsCount)
          })
        },

        // Изменить количество слайдов
        changeSliderICount: function () {
          this.$nextTick(function () {
            this.$store.dispatch('changeSliderItemsCount',
                                 parseInt(this.$store.state.carousel.allItemsCount / 100 * this.sliderItemsPercentVal) || 1).then(() => {
                                   this.sliderItemsCount = this.$store.state.carousel.sliderItemsCount
                                 })
          })
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .topic {
    color: #9c968e;
  }
</style>
