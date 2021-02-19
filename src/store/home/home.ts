

export const home = {
    namespaced: true,
    state: {
        recipes: [],
        next_token: ""
    },
    mutations: {},
    actions: {},
    getters: {
        recipes: (state: any) => state.recipes,
        next_token: (state: any) => state.next_token
    }
}