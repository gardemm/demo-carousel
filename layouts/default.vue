<template>
  <div class="fake-height">
    <b-navbar toggleable sticky type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://github.com/gardemm/demo-carousel"><font-awesome-icon :icon="['fab', 'github']" /> Github</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>

      <nuxt/>

    </b-container>
  </div>
</template>

<style>
  h1, h2 {
    margin-bottom: 35px;
    margin-top: 35px;
    color: #4aa3b8;
  }

  html, body {
    color: #4aa3b8;
  }
</style>
