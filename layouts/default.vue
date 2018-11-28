<template>
    <div class="wrapper">
        <!-- NAVBAR -->
        <b-navbar toggleable sticky type="dark" variant="info">
            <b-container>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="https://github.com/gardemm/demo-carousel"><font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon> Github</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
            </b-container>
        </b-navbar>

        <!-- CONTENT -->
        <b-container>
            <nuxt/>
        </b-container>

        <!-- FOOTER -->
        <footer class="footer">
            <b-container>
                @2018
            </b-container>
        </footer>
    </div>
</template>

<style lang="scss">

  // общие стили
  h1, h2 {
    margin-bottom: 35px;
    margin-top: 35px;
    color: #4aa3b8;
  }

  // sticky footer nuxt styles !
  html {
    color: #4aa3b8;
    background-color: #f5f5f5;
    position: relative;
    min-height: 100%;
  }

  body {
    margin: 0 0 60px;
    background-color: #f5f5f5;
  }

  .form-control:focus {
    box-shadow: none;
  }

  .footer {
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
</style>
