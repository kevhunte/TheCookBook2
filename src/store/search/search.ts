

export const search = {
    namespaced: true,
    state: {
        recipes: [],
        settings: {}
    },
    mutations: {},
    actions: {},
    getters: {
        recipes: (state: any) => state.recipes,
        settings: (state: any) => state.settings
    }
}