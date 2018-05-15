<template>
  <div class="fake-height">
    <b-navbar toggleable sticky type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="contacts">Contacts</router-link>
            </li>
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
  h1 {
    margin-bottom: 35px;
    margin-top: 35px;
  }

  .fake-height {
    height: 2000px;
  }
</style>
