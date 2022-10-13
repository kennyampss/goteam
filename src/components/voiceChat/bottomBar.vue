<template>
  <div class="bottomBar pb-5">
    <v-container fluid class="py-0 d-flex">
      <v-row no-gutters>
        <v-col class="d-flex justify-start align-center">
          <div>
            <v-icon color="link" size="large">mdi-help-circle-outline</v-icon>
            <p class="mb-0">Help</p>
          </div>
        </v-col>
        <v-col class="d-flex justify-center menu-bottom-center">
          <v-list dense class="d-flex my-2">
            <v-list-item class="pa-2">
              <v-list-item-icon class="mx-0">
                <v-icon color="red" class="">mdi-microphone-off</v-icon>
                <v-icon>mdi-chevron-up</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item class="pa-2">
              <v-list-item-icon class="mx-0">
                <v-icon color="red">mdi-video-off-outline</v-icon>
                <v-icon>mdi-chevron-up</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-menu top :offset-y="offset">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item class="pa-2" v-bind="attrs" v-on="on">
                  <v-list-item-icon class="mx-0">
                    <v-icon color="#F5C62B">mdi-emoticon-happy</v-icon>
                    <v-icon>mdi-chevron-up</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </template>

              <v-container fluid style="background-color: #fff; width: 210px">
                <v-row>
                  <v-col
                    v-for="(icon, i) in icons"
                    :key="i"
                    class="align-stretch"
                  >
                    <v-icon v-text="icon.icon" :color="icon.color"></v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-menu>

            <v-list-item class="pa-2">
              <v-list-item-icon class="mx-0">
                <v-badge bordered overlap :content="2" color="red">
                  <v-icon color="#F5C62B">mdi-hand-back-left</v-icon>
                </v-badge>
              </v-list-item-icon>
              <v-list-item-content class="ml-3">
                <v-list-item-title color="primary"
                  >Raise Hand</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          class="d-flex align-center"
          :class="
            $vuetify.breakpoint.smAndUp ? 'justify-end' : 'justify-center'
          "
        >
          <div
            class="menu-bottom-right d-flex align-center"
            v-if="$vuetify.breakpoint.smAndUp"
          >
            <div
              v-for="(menu, i) in menuBottomRightItems"
              :key="i"
              class="px-3"
            >
              <v-icon v-text="menu.icon" size="large" color="primary"></v-icon>
              <p class="mb-0" v-text="menu.title"></p>
            </div>
            <v-divider dark vertical class="vertical-separator mx-5" />
            <div>
              <v-btn
                color="#FF4E66"
                medium
                class="white--text phone-status"
                elevation="0"
              >
                <v-icon right dark class="ma-0"> mdi-phone-hangup </v-icon>
                <span class="ml-2 text-capitalize font-weight-medium subtitle-2"
                  >Leave</span
                >
                <v-divider dark vertical class="vertical-divider mx-2" />
                <v-icon right dark class="ma-0"> mdi-chevron-up </v-icon>
              </v-btn>
            </div>
          </div>
          <div v-else>
            <v-btn
              color="primary"
              small
              class="text-capitalize"
              @click="showFooterMenu"
              >Footer Menu
              <v-icon class="ml-2">mdi-dots-horizontal</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { computed } from "vue";
import { mapMutations } from "vuex";
import Utils from "@/helpers/utils";

export default {
  data() {
    return {
      menuBottomRightItems: Utils.menu().menu_bottom,
      offset: true,
      icons: Utils.toggleIcon().iconSet,
    };
  },

  methods: {
    ...mapMutations("modal", ["setShowFooterMenuHandler"]),

    showFooterMenu() {
      this.setShowFooterMenuHandler(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.bottomBar {
  background-color: #fff;

  p {
    font-size: 13px;
  }

  .menu-bottom-center {
    .v-list-item {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      border: 1px solid #dcdde1 !important;
    }
  }

  hr.vertical-separator {
    border-color: #dcdde1 !important;
  }

  hr.vertical-divider {
    border-color: #fff !important;
  }
}
</style>