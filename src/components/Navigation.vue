<template>
  <div class="nav-container shadow">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="12" lg="11">
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#" class="logo-text"
              ><span class="logo-color">SSV Wellesweiler</span>
              Basketball</b-navbar-brand
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ms-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Training</b-nav-item>
                <b-nav-item href="#">Mannschaften</b-nav-item>
                <b-nav-item href="#">Gallerie</b-nav-item>
                <b-nav-item href="#">Kontakt</b-nav-item>
                <b-nav-item-dropdown ref="dropdown" text="Sonstiges" right>
                  <b-dropdown-item href="#">Download</b-dropdown-item>
                  <b-dropdown-item href="#">Spielpläne BVS</b-dropdown-item>
                  <b-dropdown-item href="#">Datenschutz</b-dropdown-item>
                  <b-dropdown-item href="#">Impressum</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script></script>

<style scoped>
.nav-container {
  width: 100%;
  background-color: #01324c;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
