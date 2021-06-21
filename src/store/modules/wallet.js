/* eslint-disable no-param-reassign */
export default {
  namespaced: true,
  state: {
    address: null,
  },
  mutations: {
    setAddress: (state, address) => {
      state.address = address;
    },
    disconnect: (state) => {
      state.address = null;
    },
  },
  getters: {
    walletAddress: (state) => state.address,
  },
};
