import Vue from 'vue';
import Vuex from 'vuex';

import Service from "@/service"


Vue.use(Vuex);

const state = { 
  filter: "all",
  list: []
}
const getters = {
    getList: (state) => state.list,
    lastId: (state) => { let index = state.list.length; return state.list[index-1].id }
}
const mutations = {
    addItem: (state, payload) => {
       state.list.push(payload);
    },
    getList: (state, payload) => {
       state.list = payload;
    }
}
const actions = {
  addItem({commit}, payload) {
    Service.addItem(payload).then(() => {
       commit('addItem', payload );
    })
  },
  getList({commit}) {
    Service.getTodos().then(res => {
      commit('getList', res.data);
     
    });
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})