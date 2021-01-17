import {Auth} from 'aws-amplify';

export const auth = {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.user = payload;
        }
    },
    actions: {
        async logout({commit}: any){
            console.log('logging out...');
            
            commit("setUser",null)
            return await Auth.signOut({global: true});
        },
        async login({commit}: any, {username, password}: any) {
            try {
                await Auth.signIn({
                    username,
                    password
                });
                const userInfo = await Auth.currentUserInfo();
                commit("setUser",userInfo);
                return Promise.resolve("Success")
            }
            catch(e) {
                //console.log("error", e);
                return Promise.reject(e)
            }
        },
        async confirmSignUp(_ : any, {username, code}: any){
            try {
                await Auth.confirmSignUp(username,code)
                return Promise.resolve()
            } catch (error) {
                //console.log(error);
                return Promise.reject(error)
            }
        },
        async signUp(_ : any, {username, password, email}: any){
            try {
                await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email
                    }
                })
            } catch (error) {
                //console.log(error);
                return Promise.reject()
                
            }
        },
        async authAction({commit}:any){
            const userInfo = await Auth.currentUserInfo()
            commit("setUser", userInfo)
        }
    },
    getters: {
        user: (state: any) => state.user
    }
}