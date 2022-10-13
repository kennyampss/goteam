
import user1 from "@/assets/goTeam/image_1.png";
import user2 from "@/assets/goTeam/image_2.png";
import user3 from "@/assets/goTeam/image_3.png";
import user4 from "@/assets/goTeam/image_4.png";
import user5 from "@/assets/goTeam/image_5.png";
import user6 from "@/assets/goTeam/image_6.png";
import user7 from "@/assets/goTeam/image_7.png";

export default {
  user() {
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
    }
  },

  menu() {
    return {
      menu_top: [
        {
          title: "Team Members",
          data: 7,
          icon: "mdi-account-multiple",
        },
        {
          title: "Discussion",
          data: 3,
          icon: "mdi-message-text",
        },
        {
          title: "Apps",
          data: null,
          icon: "mdi-database-check-outline",
        },
        {
          title: "Gallery View",
          data: null,
          icon: "mdi-view-grid-outline",
        },
      ],

      menu_bottom: [
        {
          title: "Team Members",
          data: 7,
          icon: "mdi-account-multiple",
        },
        {
          title: "Discussion",
          data: 3,
          icon: "mdi-message-text",
        },
        {
          title: "Apps",
          data: null,
          icon: "mdi-database-check-outline",
        },
        {
          title: "Gallery View",
          data: null,
          icon: "mdi-view-grid-outline",
        },
      ],
    }
  },

  toggleIcon() {
    return {
      iconSet: [
        {
          icon: "mdi-hand-pointing-right",
          color: '#FDC794'
        },
        {
          icon: "mdi-hand-back-left",
          color: '#FDC794'
        },
        {
          icon: "mdi-hand-okay",
          color: '#FDC794'
        },
        {
          icon: "mdi-hand-wave",
          color: '#FDC794'
        },
        {
          icon: "mdi-emoticon-excited",
          color: '#F5C62B'
        },
        {
          icon: "mdi-cards-heart",
          color: '#FF5578'
        },
        {
          icon: "mdi-brain",
          color: '#FE8F8D'
        },
        {
          icon: "mdi-fire",
          color: '#FF6536'
        },
        {
          icon: "mdi-party-popper",
          color: '#5CD0B3'
        },
        {
          icon: "mdi-chat-question",
          color: '#1560F6'
        },
        {
          icon: "mdi-checkbox-marked-circle",
          color: '#2F385B'
        },
        {
          icon: "mdi-dots-horizontal-circle",
          color: '#2F385B'
        },
      ]
    }
  }
}