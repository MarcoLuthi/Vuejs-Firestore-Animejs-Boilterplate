import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app';
import {
    db
} from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: null
    },
    getters: {
        getDatas: state => {
            return state.data
        },
        getActiveData: (state) => (id) => {
            return state.datas.find(struct => struct.id === id)
        }
    },
    mutations: {
        setDatas: function(state, payload) {
            let data = []
            db.collection(payload).onSnapshot((snapshot) => {
                data = []
                snapshot.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })

                return state.data = data

            })
        },

    },
    actions: {
        setDatas: function({
            commit
        }, payload) {
            commit('setDatas', payload.id)
        }

    }
})
