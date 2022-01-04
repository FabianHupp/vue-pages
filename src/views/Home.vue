<template>
  <div ref="home">

    <!-- Navigation -->
    <navigation></navigation>

    <!-- Main Body Content -->
    <div class="home-content overflow-h">

      <!-- Bballer Header -->
      <home-header></home-header>

      <!-- Spielpläne -->
      <content-section>

        <!-- Beschreibung und BVS Link -->
        <b-container>
          <b-row class="justify-content-center">
            <h3 class="heading-font">Spielpläne</h3>
            <p class="py-2 p-font"> Spielpläne und Statistiken können auch auf der BVS Website eingesehen werden. </p>
            <custom-button
              text="Spielpläne BVS"
              bgColor="prime-color"
              textColor="white-font"
              icon="clipboard-data"
              link="https://www.basketball-bund.net/index.jsp?Action=100&Verband=9"
            ></custom-button>
          </b-row>
        </b-container>

        <!-- Spielpläne Widgets -->
        <b-card v-for="(plan, index) in spielplaene" :key="index" class="shadow rounded border-0 mt-5">
          <div class="spielplan">
            <div class="spielplan-inner">
              <iframe class="spielplan-frame" :src="plan.source"></iframe>
            </div>
          </div>
        </b-card>

      </content-section>

      <!-- Gallerie Teaser -->
      <content-section color="secondary-color">
        <b-row>

          <!-- Gallery Teaser -->
          <b-col md="6" class="primary-color ">
            <b-card>
            </b-card>
          </b-col>

          <!-- Calendar -->
          <b-col md="6" class="p-4 pb-5 pt-4">
            <h3 class="white-font text-left">Lust auf Basketball?</h3>
            <p class="pt-2 px-0 white-font text-left"> Wir sind immer auf der Suche nach neuen Mitgliedern.</p>
            <p class=" px-0 white-font text-left"> Bei Interesse können Sie gerne zu unseren Trainingszeiten vorbeikommen oder kontaktieren Sie unsere Trainer per Mail.</p>
            <custom-button
              text="Spielpläne BVS"
              bgColor="prime-color"
              textColor="white-font"
              icon="clipboard-data"
              link="https://www.basketball-bund.net/index.jsp?Action=100&Verband=9"
            ></custom-button>
          </b-col>


        </b-row>
      </content-section>


      
      <!-- Gallerie Teaser -->
      <!-- <content-section color="primary-color">

        <gallery-teaser></gallery-teaser>

        <b-container class="mt-5">
          <b-row class="justify-content-center">
            <p class="py-2 white-font"> Unsere Bilder finden Sie in der Gallerie. </p>
            <custom-button 
              text="Gallerie"
              bgColor="prime-color"
              textColor="white-font"
              icon="images"
            ></custom-button>
          </b-row>
        </b-container>
      </content-section> -->

      <!-- Calendar Section -->
      <content-section color="grey-section-color">
        <b-row>

          <!-- Beschreibung und Legende -->
          <b-col md="6" class="p-4 pb-5 pt-4">
            <h3 class="heading-font text-left">Vereinstermine</h3>
            <p class="py-2 px-0 p-font text-left"> Bevorstehende Veranstaltungen für Hauptverein, Abteilung, BVS und Lehrgänge. </p>
            <b-row class="m-0 p-0 pt-1">
              <b-col cols="auto">
                <legende-item color="secondary-color" label="Abteilung"></legende-item>
              </b-col>
              <b-col cols="auto">
                <legende-item color="prime-color" label="BVS"></legende-item>
              </b-col>
              <b-col cols="auto">
                <legende-item color="bordered-point" label="Hauptverein" class="p-0 mb-3" ></legende-item>
              </b-col>
            </b-row>
          </b-col>

          <!-- Calendar -->
          <b-col md="6">
            <v-calendar
              class="shadow rounded border-0 calendar"
              :attributes="formattedTermine"
            ></v-calendar>
          </b-col>

        </b-row>
      </content-section>

      <!-- Footer Component -->
      <c-footer color="grey-section-color"></c-footer>
    </div>
  </div>
</template>

<script>
import ContentSection from "../components/ContentSection.vue";
import Navigation from "../components/Navigation.vue";
import HomeHeader from "../components/HomeHeader.vue";
import CustomButton from "../components/CustomButton.vue";
//import GalleryTeaser from "../components/Swiper.vue";
import LegendeItem from "../components/LegendeItem.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    "content-section": ContentSection,
    "custom-button": CustomButton,
    "legende-item": LegendeItem,
    "c-footer": Footer,
    //"gallery-teaser": GalleryTeaser,
    "home-header": HomeHeader,
    navigation: Navigation
  },
  data() {
    const termine = [
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("Januar 4, 2022"),
        color: "#01324c",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("Januar 14, 2022"),
        color: "#dd6b20",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("Januar 22, 2022"),
        color: "#dd6b20",
        fill: "solid",
      },
      {
        description: "Mitgliederversammlung - 18:00-20:00",
        isComplete: false,
        dates: new Date("Januar 26, 2022"),
        color: "#fff",
        fill: "outline",
        outlineColor: "#01324c",
      },
    ];

    const spielplaene = [
      { source: "https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22162082%22%7D"},
      { source: "https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22163409%22%7D"},
      { source: "https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/163417/params/%7B%22iframeWidth%22:300,%22iframeHeight%22:450,%22showRefreshButton%22:false,%22titleColor%22:%22F0EDEB%22,%22titleBgColor%22:%22F0EDEB%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22FB7F3F%22,%22colorMatchGroup%22:%22FFFFFF%22,%22bgColorMatchGroup%22:%2201324C%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22163417%22%7D"}
    ];

    return {
      termine,
      spielplaene
    };
  },
  computed: {
    /* Termine in für v-calendar lesbares format konvertieren */
    formattedTermine() {
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
  }
};
</script>

<style>
.home-content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 56px;
  margin: 0 0 0 0;
  padding: 0;
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

.calendar {
  position: relative;
  margin: 0;
  width: 100% !important;
}
</style>
