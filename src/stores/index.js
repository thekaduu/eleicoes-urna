import Vue from 'vue';
import Vuex from 'vuex';
import UrnaStore from './UrnaStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    "UrnaStore": UrnaStore
  }
});