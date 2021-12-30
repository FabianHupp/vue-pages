<template>
  <div class="footer-section" :class="color">
    <b-container>
      <b-row align-h="center">
        <b-col cols="10" md="10">
          <hr/>
          <b-container class="m-0 p-0">
            <b-row class="m-0 pt-3">
              <b-col cols="auto" class="footer-text copyright p-0 m-0">© 2021 bballer</b-col>
              <b-col cols="auto" class="footer-text ms-auto">
                <b-row>
                  <b-col>
                    <a href="#" class="footer-link">Datenschutz</a>
                  </b-col>
                  <b-col>
                    <a href="#" class="footer-link">Impressum</a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: { color: String },
};
</script>

<style scoped>
.footer-section {
  position: relative;
  width: 100%;
  padding: 0 0 55px 0;
}

.footer-text {
  color: var(--footerTextColor);
  font-size: 14px;
}

.footer-link {
  color: var(--footerTextColor);
  text-decoration: none;
  text-align: right;
  transition: color 0.1s ease-in-out;
}

.footer-link:hover {
  color: var(--footerTextHoverColor);
}

.copyright {
  cursor: default;
}
</style>
