<template>
  <toolbar></toolbar>

  <div class="cards mt-5">
    <character v-for="character in characters" :character="character" :key="character.id">
    </character>
  </div>

</template>

<script >
import toolbar from "@/shared/components/toolbar.vue";
import { ref, onMounted } from 'vue'
import character from '../components/character.component.vue'
import { Service } from '../services/index.service.js'

export default {
  components: {
    character,
    toolbar
  },
  setup() {
    const characters = ref([])

    const fetchCharacters = async () => {
      let response = await Service.getAll()
      characters.value = response.data.results
    }

    onMounted(fetchCharacters)

    return {
      characters,

    }
  }
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* Espacio entre elementos de la cuadrícula */
  width: 100%;
  justify-items: center;
}
</style>
