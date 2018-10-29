<style scoped>
  .candidates {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    margin-top: 50px;
  }
  .Urna {
    padding: 15px;
  }
  .candidate {
    flex-grow: 1;
  }
  .finish {
    margin-top: 70px;
    align-self: flex-end;
  }
  .btn {
    padding: auto 25px;
    font-size: 30pt;
  }
</style>


<template>
  <div class="Scrutiny">
    <h4 claass="scrutinyName">{{scrutinyName}}</h4>
    <span class="text-danger">Você pode selecionar {{totalRemaining}} candidatos. </span>
    <div class="candidates">
      <div  class="candidate" v-for="(candidate, index) in candidates" :key="index">
        <Candidate
          :data="candidate"
          @candidateSelected="select"
          @candidateUnselected="unselect"
          :disabled="isDisabled(candidate.id)"
        />
      </div>
    </div>

    <div class="finish">
      <a href="#" @click="vote" class="btn btn-success"> CONFIRMAR</a>
    </div>
  </div>
</template>

<script>
import Candidate from './Candidate.vue'
import swal from 'sweetalert';
import { mapState } from 'vuex';

export default {
  props: {
    legend: {type: String, requried: true},
    candidates: {type: Array, requried: true},
    maxVotes: {type: Number, requried: true},
  },
  name: 'Scrutiny',
  components: { Candidate },
  data() {
    return {
      candidateSelected: [],
    };
  },
  computed: {
    scrutinyName() { return this.legend; },
    totalSelecteds() { return this.candidateSelected.length; },
    canSelect() { return this.totalSelecteds < this.maxVotes},
    totalRemaining() { return this.maxVotes - this.totalSelecteds; },
  },

  methods: {
    _confirmVote() {
      return new Promise((resolve, reject) => {
        swal({
            title: "Confirmar",
            text: "Você confirmar seu voto para os candidatos em que selecionou? Após confirmar não será possivel voltar?",
            icon: "info",
            buttons: ["Não", "Sim"],
          })
          .then((confirmar) => {
            if (confirmar) { return resolve() }
            reject();
          });
      });
    },

    _lessMaxVote() {
        return new Promise((resolve, reject) => {
        swal({
            title: "Confirmar",
            text: "Você selecionou um número de candidatos inferior ao que você pode escolher. Deseja continuar assim? Caso confirme não será possível voltar.",
            icon: "warning",
            buttons: ["Não", "Sim"],
          })
          .then((confirmar) => {
            if (confirmar) { return resolve() }
            reject();
          });
      });
    },

    _confirmAnulation() {
       return new Promise((resolve, reject) => {
        swal({
            title: "Voto em branco",
            text: "Você não selecionou nenhum candidato, deseja votar em branco? Caso confirme não terá a possibilidade de voltar",
            icon: "warning",
            buttons: ["Não", "Sim"],
          })
          .then((confirmar) => {
            if (confirmar) { return resolve() }
            reject();
          });
      });
    },

    vote() {
      if (this.totalSelecteds > 0) {
        if (this.totalSelecteds < this.maxVotes) {
          return this._lessMaxVote()
            .then(() => this.$emit("finish"));
        }
        return this._confirmVote()
          .then(() => this.$emit("finish"));
      }


     this._confirmAnulation()
      .then(() => this.$emit("finish"));

    },
    isDisabled(candidateId) {
      return !this.canSelect && this.candidateSelected.indexOf(candidateId) == -1;
    },

    select(candidateId) {
      if (this.canSelect) { return this.candidateSelected.push(candidateId); }
      alert('Voce nao pode votar mais!');
    },
    unselect(candidateId) {
      const index = this.candidateSelected.indexOf(candidateId);
      if (index >= 0) {
        this.candidateSelected.splice(index, 1);
      }
    }


  }
}
</script>