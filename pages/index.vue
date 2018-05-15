<template>
  <div class="facked-height">
    <b-navbar toggleable sticky type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Contacts</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <div>
        <carousel :scrollPerPage="true" :perPageCustom="[[0, 1], [768, 3]]">
          <slide><img src="https://picsum.photos/300/100/" ></slide>
          <slide><img src="https://picsum.photos/300/100/" ></slide>
          <slide><img src="https://picsum.photos/300/100/" ></slide>
          <slide><img src="https://picsum.photos/300/100/" ></slide>
          <slide><img src="https://picsum.photos/300/100/" ></slide>
          <slide><img src="https://picsum.photos/300/100/" ></slide>
        </carousel>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

  .facked-height {
    height: 2000px;
  }

  .VueCarousel-slide {
    position: relative;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    .image{
      width: 300px;
      max-width: 100%;
    }
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
