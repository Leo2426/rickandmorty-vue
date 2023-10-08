<script setup >

defineProps({
  character: {}
})

</script>

<template>
    <pv-card class="card">
      <template #title> {{ character.name}}</template>
      <template #content>
        <img :src="character.image" alt="">
        <h4> {{character.species}} </h4>
        <p>{{character.location.name}}</p>
      </template>
    </pv-card>
</template>

<style scoped>
.card {
  width: 80%;
  text-align: center;
  color: #2b3467;
  /* Estilos adicionales aquí */
}

.card img {
  width: 80%;
}
</style>