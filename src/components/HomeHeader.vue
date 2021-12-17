<template>
     <header class="showcase">
        <div class="head-container showcase-inner">
          <b-container>
            <b-row class="logo-center">
              <b-img :src="require('../assets/Images/Finished.svg')" class="header-logo"></b-img>
              <b-col>
                <b-row>
                  <h1 class="logo-color logo-heading"> SSV Wellesweiler </h1>
                </b-row>
                <b-row>
                  <h1 class="purple-secondary-color logo-heading"> Abt. Basketball </h1>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </header>
</template>

<script>
</script>

<style>
  .header-logo {
      width: 180px !important; /** 192px */
      position: relative;
      top: -9px;
      right: 2px;
  }

  .logo-heading {
    width: fit-content;
  }

  .logo-center {
    margin: auto;
    padding: 0 0 0 21rem;
  }

  .showcase {
    background: rgba(1, 50, 76, 0.65);
    color: #fff;
    height: calc(59vh - 56px);
    position: relative;
    overflow: hidden;
  }

  .showcase:before {
    content: '';
    background: url('https://static.vecteezy.com/system/resources/previews/002/096/660/non_2x/indoor-basketball-court-free-photo.jpg') no-repeat center center/cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .head-container {
    max-width: 1400px; /**960 */
    position: relative;
    top: 22%;
    max-height: 600px;
    margin: auto;
    overflow: hidden;
    padding: 0 0rem;
  }

  .showcase .showcase-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    height: 55%;
  }

  .showcase h1 {
    font-size: 54px; /**64px */
    font-weight: 600;
    line-height: 1.1;
  }

  .showcase p {
    font-size: 1.3rem;
  }


  @media screen and (max-width: 1920px) {
    .showcase {
        height: calc(60vh - 56px);
    }
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 991px) {

    .showcase h1 {
      font-size: 48px;
    }
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 767px) {

    .showcase {
        height: calc(45vh - 56px);
    }
    .showcase h1 {
      font-size: 2.5rem;
    }
  }
</style>