<style scoped>
.Candidate {
  width: 240px;
  text-align: center;
  cursor: pointer;
  margin: 0px auto;

}
.photo {
  width: 240px;
  display: block;
}
.name {
  font-size: 14pt
}
.selected {
  border: 5px solid #2ecc71;
}
.disabled :not(.selected) {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>


<template>
  <div class="Candidate" :class="{'selected': selected, 'disabled': isDisabled}" @click="selectCandidate">
    <img :src="candidate.photo" class="photo"/>
    <span class="name">{{candidate.name}}</span>
  </div>
</template>
<script>

  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      disabled: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        selected: false
      }
    },
    computed: {
      candidate() { return this.data; },
      isDisabled() { return this.disabled; }
    },

    methods: {
      selectCandidate() {
        if (! this.selected) {
          if (this.isDisabled) { return; }
          this.selected = true;
          return this.$emit('candidateSelected', this.candidate.id);
        }
        this.selected = false;
        this.$emit('candidateUnselected', this.candidate.id);
      }
    }

  }
</script>