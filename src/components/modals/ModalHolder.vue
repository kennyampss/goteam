<template>
  <div>
    <ModalMenuHandler v-if="showMenuHandler" />
    <ModalFooterMenuHandler v-if="showFooterMenuHandler" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalMenuHandler from "./ModalMenuHandler.vue";
import ModalFooterMenuHandler from "./ModalFooterMenuHandler.vue";

export default {
  components: {
    ModalMenuHandler,
    ModalFooterMenuHandler,
  },

  computed: {
    ...mapGetters("modal", ["showMenuHandler", "showFooterMenuHandler"]),
  },
};
</script>