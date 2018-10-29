<style scoped>
  .logo {
    width: 200px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .finished {
    font-size: 13em;
  }

  body {
    margin: 0px;
  }
</style>

<template>

  <div id="app">
    <audio id="myAudio">
      <source src="./assets/finish.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <img src="./assets/logo.png" class="logo"/>
    <Scrutiny
      v-for="(scrutiny, index) in scrutinies"
      :key="index"
      v-if="index == activeScrutiny"
      :candidates="getCandidates(index)"
      :legend="scrutiny.name"
      :max-votes="scrutiny.max_votes"
      @finish="nextScrutiny"
    />

    <div v-if="finishedSession" class="finished"> FIM </div>
  </div>
</template>

<script>
import Scrutiny from './components/Scrutiny.vue'
import store from './stores';
import { mapState } from 'vuex';

export default {
  name: 'app',
  store,
  components: { Scrutiny },
  data() {
    return {
      activeScrutiny: 0,
    }
  },
  computed: {
    ...mapState('UrnaStore', ['scrutinies']),
    finishedSession() { return this.scrutinies.length == this.activeScrutiny; }
  },
  methods: {
    restartSession() {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    },
    playSound() {
      const x = document.getElementById("myAudio");
      x.play();
    },
    nextScrutiny() {
      this.activeScrutiny ++;
      if (this.finishedSession) {
        this.playSound();
        this.restartSession();
      }
    },
    getCandidates(index) {
      const scrutiny =  this.scrutinies[index];
      return scrutiny.candidates;
    }
  }
}
</script>
