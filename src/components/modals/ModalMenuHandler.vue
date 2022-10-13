<template>
  <v-dialog
    v-model="show"
    conten-class="modal-menu-handler"
    width="400"
    max-width="500"
    persistent
  >
    <div class="white pb-2">
      <v-card elevation="0">
        <v-card-title class="pa-2 d-flex justify-space-between">
          <small class="title font-weight-bold text-capitalize">
            <span>Tab's Menu</span></small
          >
          <v-btn icon @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <div class="menu-top-right">
          <v-list dense>
            <v-list-item-group class="">
              <v-list-item v-for="(menu, i) in menuTopRightItems" :key="i">
                <v-list-item-icon
                  class="mr-2"
                  v-if="menu.data > 0 && menu.data != 7"
                  @click.stop="panelListener(menu)"
                >
                  <v-badge bordered overlap :content="menu.data" color="red">
                    <v-icon v-text="menu.icon" color="primary"></v-icon>
                  </v-badge>
                </v-list-item-icon>
                <v-list-item-icon class="mr-2" v-else>
                  <v-icon v-text="menu.icon" color="primary"></v-icon>
                </v-list-item-icon>

                <v-list-item-content class="text-left ml-4">
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
      menuTopRightItems: Utils.menu().menu_top,
    };
  },

  methods: {
    ...mapMutations("modal", ["setShowMenuHandler"]),
  },

  computed: {
    ...mapGetters("modal", ["showMenuHandler"]),

    show: {
      get() {
        return this.showMenuHandler;
      },
      set(v) {
        this.setShowMenuHandler(v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-top-right {
  .members-count {
    background: #e8e9ee;
    padding: 8px;
    font-size: 10px;
    font-weight: bold;
  }
}
</style>