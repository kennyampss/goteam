<template>
  <div class="voice-chat-page">
    <v-app-bar color="white accent-4" dark dense elevation="0">
      <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title
        color="primary"
        class="font-weight-bold text-subtitle-1 pl-0"
        >Voice and Chat Communication</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- blank panel -->
    <!-- bottom props drawer for mobile breakpoint -->
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <div class="mt-3">{{ activePanel }}</div>
    </v-navigation-drawer>

    <v-divider />
    <TopBar @openPanel="panelListener"></TopBar>
    <ParticipantList></ParticipantList>
    <BottomBar class="footer-bar"></BottomBar>
  </div>
</template>

<script>
import TopBar from "@/components/voiceChat/topBar.vue";
import ParticipantList from "@/components/voiceChat/participantList.vue";
import BottomBar from "@/components/voiceChat/bottomBar.vue";

export default {
  name: "VoiceChatView",

  components: {
    TopBar,
    ParticipantList,
    BottomBar,
  },

  data() {
    return {
      drawer: false,
      group: null,
      activePanel: null,
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    panelListener(data) {
      this.drawer = !this.drawer;
      this.activePanel = data.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.voice-chat-page {
  .v-toolbar__title {
    color: #2f385b;
    font-weight: 14px;
  }
  .footer-bar {
    border-top: 1px solid #dcdde1;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }
}
</style>