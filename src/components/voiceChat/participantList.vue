<template>
  <div
    class="participant-list"
    :class="$vuetify.breakpoint.xsOnly ? 'scrollable-end' : ''"
  >
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(card, i) in participantList"
          :key="i"
          xl="3"
          lg="3"
          sm="6"
          md="4"
          class="align-stretch pa-1 item"
        >
          <v-card elevation="1" max-width="465" max-height="370">
            <v-btn
              color="primary"
              x-small
              class="py-3 ma-0 hands-up"
              text
              v-if="i == 4"
            >
              <v-icon color="#F5C62B" class="status pa-1"
                >mdi-hand-back-left</v-icon
              >
            </v-btn>
            <v-img :src="card.avatar" class="align-end">
              <div class="d-flex justify-start align-center ma-2">
                <v-btn color="primary" x-small class="py-3 ma-0 pa-0" text>
                  <v-icon
                    class="status"
                    v-text="card.statusIcon"
                    :color="card.status"
                    size="large"
                  ></v-icon>
                </v-btn>

                <v-icon
                  class="status mr-2"
                  size="large"
                  color="white"
                  v-if="i == 0"
                  >mdi-pin</v-icon
                >

                <h6 class="name font-weight-medium">
                  {{ card.name }} <span v-if="i == 0">(You)</span>
                </h6>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import user1 from "@/assets/goTeam/image_1.png";
import user2 from "@/assets/goTeam/image_2.png";
import user3 from "@/assets/goTeam/image_3.png";
import user4 from "@/assets/goTeam/image_4.png";
import user5 from "@/assets/goTeam/image_5.png";
import user6 from "@/assets/goTeam/image_6.png";
import user7 from "@/assets/goTeam/image_7.png";

export default {
  data() {
    return {
      participantList: [
        {
          name: "Reyven Biloy",
          statusIcon: "mdi-microphone-off",
          avatar: user1,
          status: "red",
        },
        {
          name: "Bill Murray",
          statusIcon: "mdi-microphone-outline",
          avatar: user2,
          status: "green",
        },
        {
          name: "Helene Oliver",
          statusIcon: "mdi-microphone-outline",
          avatar: user3,
          status: "green",
        },
        {
          name: "Joe Carlson",
          statusIcon: "mdi-microphone-outline",
          avatar: user4,
          status: "green",
        },
        {
          name: "Anita Yang",
          statusIcon: "mdi-microphone-off",
          avatar: user5,
          status: "red",
        },
        {
          name: "Alexander Pitt",
          statusIcon: "mdi-microphone-outline",
          avatar: user6,
          status: "green",
        },
        {
          name: "John Doe",
          statusIcon: "mdi-microphone-outline",
          avatar: user7,
          status: "green",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.participant-list {
  .item {
    .status {
      background-color: #2f385b;
      border-radius: 3px;
      padding: 2px;
    }
    .name {
      font-size: 14px;
      color: #fff;
      text-shadow: 3px 3px 6px rgba(150, 150, 150, 1);
      // -webkit-text-stroke-width: 0.2px;
    }

    .hands-up {
      position: absolute;
      z-index: 1;
      left: 8px;
      top: 15px;
    }
  }
}

.scrollable-end {
  height: 280vh;
}
</style>