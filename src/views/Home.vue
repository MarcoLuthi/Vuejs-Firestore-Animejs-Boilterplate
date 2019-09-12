<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="datas in getDatas" :key="datas.id">
    <div v-for="(value, key, index) in datas">
    <b>{{key}}</b>  : {{value}}
    </div>
    <div class="card-footer">
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { db } from '@/main';
import {  mapGetters } from 'vuex';

export default {
  name: 'home',
  created:function () {
  this.$store.dispatch("setDatas", {'id': 'cities'});
},
  data() {
      return {
          collection: [],
      }
  },
  components: {
    HelloWorld
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
        'setDatas',
        'getDatas'

    ])
}
}
</script>
