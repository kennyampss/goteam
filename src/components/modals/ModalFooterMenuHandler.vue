<template>
  <v-dialog
    v-model="show"
    conten-class="modal-footer-menu-handler"
    width="400"
    max-width="500"
    persistent
  >
    <div class="white pb-3">
      <v-card elevation="0">
        <v-card-title class="pa-2 d-flex justify-space-between">
          <small class="title font-weight-bold text-capitalize">
            <span>Footer's Menu</span></small
          >
          <v-btn icon @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <div class="menu-bottom-right">
          <v-list dense>
            <v-list-item-group class="">
              <v-list-item v-for="(menu, i) in menuBottomRightItems" :key="i">
                <v-list-item-icon class="mr-2">
                  <v-icon v-text="menu.icon" color="primary"></v-icon>
                </v-list-item-icon>
                <v-list-item-content class="text-left ml-4">
                  <v-list-item-title color="primary"
                    >{{ menu.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

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
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Utils from "@/helpers/utils";

export default {
  data() {
    return {
      menuBottomRightItems: Utils.menu().menu_bottom,
    };
  },

  methods: {
    ...mapMutations("modal", ["setShowFooterMenuHandler"]),
  },

  computed: {
    ...mapGetters("modal", ["showFooterMenuHandler"]),

    show: {
      get() {
        return this.showFooterMenuHandler;
      },
      set(v) {
        this.setShowFooterMenuHandler(v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-bottom-right {
  hr.vertical-divider {
    border-color: #fff !important;
  }
}
</style>