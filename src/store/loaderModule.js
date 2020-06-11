const SET_LOADING = 'SET_LOADING'

const initState = () => {
    return {
        loader: false,
        isFullPage: false,
        isCancel: false
    }
};

const state = {
    loader: false,
    isFullPage: false,
    isCancel: false,
};

const mutations = {
    [SET_LOADING](state,loader) {
        state.loader = loader
    }
};

const actions = {
    [SET_STATE](state){
        state = initState()
    }
};

const getters = {

};


export default {
    state,
    getters,
    actions,
    mutations
}