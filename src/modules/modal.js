export default {
  namespaced: true,
  state: {
    showMenuHandler: false,
    showFooterMenuHandler: false,
  },
  getters: {
    showMenuHandler: (state) => state.showMenuHandler,
    showFooterMenuHandler: (state) => state.showFooterMenuHandler,
  },
  mutations: {
    setShowMenuHandler(state, data) {
      state.showMenuHandler = data;
    },
    setShowFooterMenuHandler(state, data) {
      state.showFooterMenuHandler = data;
    }
  },
  actions: {},
}