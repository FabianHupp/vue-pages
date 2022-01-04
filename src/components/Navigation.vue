<template>
  <div class="nav-container shadow">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="12" lg="11">
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#" class="nav-logo-text">
              <span class="prime-font">SSV Wellesweiler</span>
              <span> Basketball </span>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ms-auto">
                <b-nav-item class="item" to="/">Home</b-nav-item>
                <b-nav-item class="item" to="/training">Training</b-nav-item>
                <b-nav-item class="item" to="/mannschaften">Mannschaften</b-nav-item>
                <b-nav-item class="item" to="/gallerie">Gallerie</b-nav-item>
                <b-nav-item class="item" to="/kontakt">Kontakt</b-nav-item>
                <b-nav-item-dropdown class="item" ref="dropdown" text="Sonstiges" right>
                  <b-dropdown-item class="sub-item" to="/downloads">Downloads</b-dropdown-item>
                  <b-dropdown-item class="sub-item" href="https://www.basketball-bund.net/index.jsp?Action=100&Verband=9" target="_blank">Spielpläne BVS</b-dropdown-item>
                  <b-dropdown-item class="sub-item" to="/datenschutz">Datenschutz</b-dropdown-item>
                  <b-dropdown-item class="sub-item" to="/impressum">Impressum</b-dropdown-item>
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

.nav-logo-text {
  font-weight: 800;
}

.item {
  font-size: 0.9rem !important;
}

.sub-item {
  font-size: 0.9rem !important;
}
</style>
