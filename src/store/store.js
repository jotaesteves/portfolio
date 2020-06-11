import Vue from 'vue';
import Vuex from 'vuex';
import loader from 'loader';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        loader: loader
    },
});