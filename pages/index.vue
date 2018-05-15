<template>
  <div>
    <h1>Demo carousel</h1>

      <b-row>
        <b-col cols="2">
          <div>Mobile items count:</div>
          <b-form-select v-model="mobileItemsCount" class="mb-3">
            <option value=1>1</option>
            <option value=2>2</option>
          </b-form-select>
        </b-col>
        <b-col cols="2">
          <div>Desktop items count:</div>
          <b-form-select v-model="desktopItemsCount" class="mb-3">
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
          </b-form-select>
        </b-col>
      </b-row>

    <DemoCarouselContainer :mobileItemsCount="mobileItemsCount" :desktopItemsCount="desktopItemsCount"></DemoCarouselContainer>
  </div>
</template>

<script>
  import DemoCarouselContainer from '~/containers/DemoCarouselContainer';

  export default {
    components: {
      DemoCarouselContainer
    },
    data () {
      return {
        mobileItemsCount: 1,
        desktopItemsCount: 3
      }
    }
  }
</script>
