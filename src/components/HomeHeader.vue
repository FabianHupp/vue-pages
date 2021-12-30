<template>
  <header class="header center-children">
      <b-container class="center-children">
        <b-row class="center-children">
          <b-img :src="require('../assets/Images/Finished.svg')" class="logo-image"></b-img>
          <b-col class="logo-text">
            <b-row> <h1 class="prime-font"> SSV Wellesweiler </h1> </b-row>
            <b-row> <h1> Abt. Basketball </h1> </b-row>
          </b-col>
        </b-row>
      </b-container>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  height: calc(59vh - 56px);
  background: rgba(1, 50, 76, 0.35);
  overflow: hidden;
}

.header:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: "";
  
  background: url("http://schmid-schulz.de/wordpress/wp-content/uploads/2020/04/sli_Wellesweiler_1380-1380x400.jpg") no-repeat center center/cover; 
  /*background: url('~@/assets/Images/title2.jpg') no-repeat center center/cover;*/
  filter: blur(4px);
  -webkit-filter: blur(4px);
  transform: scale(1.05);
}

.header h1 {
  font-size: 54px;
  font-weight: 600;
  line-height: 1.1;
  position: relative;
}

.logo-image {
  position: relative;
  width: 180px !important;
}

.logo-text {
  position: relative;
  top: 2px;
}

.header h1 {
  width: fit-content;
  text-align: left;
  color: #fff;
}


/*   responsive styling   */
@media screen and (max-width: 1920px) {
  .header h1 {
    font-size: 46px;
  }

  .logo-image {
    width: 162px !important;
  }
}

@media screen and (max-width: 991px) {
  .header h1 {
    font-size: 36px;
  }

  .logo-image {
    width: 140px !important;
  }
}

@media screen and (max-width: 767px) {
  .header {
    height: calc(50vh - 56px);
  }

  .header h1 {
    font-size: 30px;
    right: 1px;
  }

  .logo-image {
    width: 122px !important;
    left: 5px;
  }
}
</style>
