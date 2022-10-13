<template>
  <div class="topBar">
    <v-container fluid class="py-0">
      <v-row no-gutters>
        <v-col class="d-flex justify-start">
          <v-icon class="pa-1" color="primary" size="medium"
            >mdi-shield-check-outline</v-icon
          ></v-col
        >
        <v-col class="d-flex justify-center">
          <div class="timer d-flex align-center">
            <v-icon color="primary" size="medium" class="mr-1"
              >mdi-clock-time-four-outline</v-icon
            >
            <span class="font-weight-bold">01:23</span>
          </div></v-col
        >
        <v-col class="d-flex justify-end">
          <div class="menu-top-right">
            <v-list dense v-if="$vuetify.breakpoint.smAndUp">
              <v-list-item-group class="d-flex">
                <v-list-item
                  v-for="(menu, i) in menuTopRightItems"
                  :key="i"
                  @click.stop="panelListener(menu)"
                >
                  <v-list-item-icon
                    class="mr-2"
                    v-if="menu.data > 0 && menu.data != 7"
                  >
                    <v-badge bordered overlap :content="menu.data" color="red">
                      <v-icon v-text="menu.icon" color="primary"></v-icon>
                    </v-badge>
                  </v-list-item-icon>
                  <v-list-item-icon class="mr-2" v-else>
                    <v-icon v-text="menu.icon" color="primary"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title color="primary"
                      >{{ menu.title }}
                      <span class="members-count" v-if="menu.data == 7">{{
                        menu.data
                      }}</span>
                      <v-icon class="gallery-toggle" v-if="i == 3"
                        >mdi-chevron-down</v-icon
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div v-else class="py-3">
              <v-btn color="primary" small @click="showMenuHandler" class="text-capitalize"
                >Tab Menu <v-icon class="ml-2">mdi-dots-horizontal</v-icon></v-btn
              >
            </div>
          </div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ModalMenuHandler from "../modals/ModalMenuHandler.vue";
import Utils from "@/helpers/utils";

export default {
  data() {
    return {
      menuTopRightItems: Utils.menu().menu_top,
    };
  },
  methods: {
    ...mapMutations("modal", ["setShowMenuHandler"]),

    showMenuHandler() {
      this.setShowMenuHandler(true);
    },

    panelListener(data) {
      this.$emit("openPanel", data);
    },
  },
  components: { ModalMenuHandler },
};
</script>


<style lang="scss" scoped>
.topBar {
  background-color: #fff;
  margin-bottom: 4px;
  .menu-top-right {
    .members-count {
      background: #e8e9ee;
      padding: 8px;
      font-size: 10px;
      font-weight: bold;
    }
  }
}
</style>