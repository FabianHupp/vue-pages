<template>
  <div class="site">

    <navigation></navigation>

    <!-- Main Body Content -->
    <div class="home ov-h" ref="screen">

      <!-- Bballer Header -->
      <home-header></home-header>

      <!-- Spielpläne -->
      <content-section>
        <b-container>
          <b-row class="justify-content-center">
            <h3 class="primetext">Spielpläne</h3>
            <p class="py-2 ptext"> Spielpläne und Statistiken können auch auf der BVS Website eingesehen werden. </p>
            <custom-button
              text="Spielpläne BVS"
              bgColor="prime-color"
              textColor="white-font"
              icon="clipboard-data"
              link="https://www.basketball-bund.net/index.jsp?Action=100&Verband=9"
            ></custom-button>
          </b-row>
        </b-container>
        <b-card class="shadow rounded border-0 mt-5">
          <div class="spielplan">
            <div class="spielplan-inner">
              <iframe
                class="spielplan-frame"
                src="https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22162082%22%7D"
              >
              </iframe>
            </div>
          </div>
        </b-card>
        <b-card class="shadow rounded border-0 mt-5">
          <div class="spielplan">
            <div class="spielplan-inner">
              <iframe
                class="spielplan-frame"
                src="https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22163409%22%7D"
              >
              </iframe>
            </div>
          </div>
        </b-card>
        <b-card class="shadow rounded border-0 mt-5">
          <div class="spielplan">
            <div class="spielplan-inner">
              <iframe
                class="spielplan-frame"
                src="https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22163417%22%7D"
              >
              </iframe>
            </div>
          </div>
        </b-card>
      </content-section>

      <!-- Gallerie Teaser -->
      <content-section color="secondary-color">
        <gallery-teaser></gallery-teaser>
        <b-container class="mt-5">
          <b-row class="justify-content-center">
            <p class="py-2 white-font"> Weitere Bilder finden Sie in unserer Gallerie. </p>
            <custom-button 
              text="Gallerie"
              bgColor="prime-color"
              textColor="white-font"
              icon="images"
            ></custom-button>
          </b-row>
        </b-container>
      </content-section>

      <!-- Calendar Section -->
      <content-section color="grey-section-color">
        <b-row>
          <b-col md="6" class="p-4 pb-5 pt-4">
            <h3 class="primetext t-left">Vereinstermine</h3>
            <p class="py-2 px-0 ptext t-left"> Bevorstehende Veranstaltungen für Hauptverein, Abteilung, BVS und Lehrgänge. </p>
            <b-row class="m-0 p-0 pt-1">
              <b-col cols="auto">
                <legende-item color="li-green" label="Abteilung"></legende-item>
              </b-col>
              <b-col cols="auto">
                <legende-item color="li-orange" label="BVS"></legende-item>
              </b-col>
              <b-col cols="auto">
                <legende-item
                  class="p-0 mb-3"
                  color="li-purple"
                  label="Hauptverein"
                ></legende-item>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6">
            <v-calendar
              class="shadow rounded border-0 calendar"
              :attributes="attributes"
            ></v-calendar>
          </b-col>
        </b-row>
      </content-section>

      <c-footer color="grey-section-color"></c-footer>
    </div>
  </div>
</template>

<script>
import ContentSection from "../components/ContentSection.vue";
import CustomButton from "../components/CustomButton.vue";
import LegendeItem from "../components/LegendeItem.vue";
import Footer from "../components/Footer.vue";
import GalleryTeaser from "../components/GalleryTeaser.vue";
import HomeHeader from "../components/HomeHeader.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Home",
  components: {
    "content-section": ContentSection,
    "custom-button": CustomButton,
    "legende-item": LegendeItem,
    "c-footer": Footer,
    "gallery-teaser": GalleryTeaser,
    "home-header": HomeHeader,
    navigation: Navigation,
  },
  data() {
    const termine = [
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("December 4, 2021"),
        color: "#01324c",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("December 14, 2021"),
        color: "#dd6b20",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("December 22, 2021"),
        color: "#dd6b20",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("December 26, 2021"),
        color: "#fff",
        fill: "outline",
        outlineColor: "#01324c",
      },
    ];

    const headerImages = [
      {
        title: "title 1",
        description: "des 1",
        src: "require('../assets/Images/title.jpg')",
      },
      {
        title: "title 2",
        description: "des 2",
        href: "https://www.exapleimages.com/second.jpg",
      },
    ];

    return {
      termine,
      headerImages,
    };
  },
  computed: {
    attributes() {
      return [
        ...this.termine.map((termin) => ({
          dates: termin.dates,
          highlight: {
            style: {
              background: termin.color,
            },
            color: termin.outlineColor,
            fillMode: termin.fill,
          },
          popover: {
            label: termin.description,
          },
          customData: termin,
        })),
      ];
    },
  },
  methods: {
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
};
</script>

<style>
.ov-h {
  overflow: hidden;
}

.home {
  width: 100%;
  height: 100%;
  position: relative;
  top: 56px;
  margin: 0 0 0 0;
  padding: 0;
}

.filter {
  background-color: #000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 2;
}

.bottom-section {
  padding-bottom: -20px;
}

.logo-text {
  font-weight: 800;
}

.purple-circle {
  background-color: #fffeee;
}

.top-margin {
  margin-top: 57px;
}

.white-font * {
  color: #fff !important;
}

.whit-font * {
  color: #fff !important;
}

.logo-color {
  color: #fb7f3f !important;
}

.spielplan {
  margin: auto;
  background-color: white;
}

.spielplan-inner {
  overflow: hidden;
  margin: auto;
}

.spielplan-frame {
  margin: -48px 0 0 0;
  padding: 0;
  width: 100%;
  min-height: 452px !important;
  border: 1px solid #eee;
  overflow: hidden;
}

.primetext {
  color: #32325d !important;
}

.ptext {
  color: #525f7f !important;
}

.white-font {
  color: #fff;
}

.t-left {
  text-align: left;
}

.circle {
  border-radius: 20px;
  height: 20px;
  width: 20px;
  margin: 5px 5px 5px 5px;
}

.cv-1 {
  background-color: #5e72e4;
}

.cv-2 {
  background-color: #525f7f;
}

.cv-3 {
  background-color: #fb7f3f;
}

.section-icon {
  height: 24px;
  width: 24px;
  padding: 1px 0 0 0;
  position: relative;
  margin: 0;
}

.calendar {
  position: relative;
  margin: 0;
  width: 100% !important;
}
</style>
