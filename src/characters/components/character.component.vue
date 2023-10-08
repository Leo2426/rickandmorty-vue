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
      </template>
      <template #footer >
        <div class="footer">
          <pv-tag class="mr-2 mb-2" severity="info">{{character.species}}</pv-tag>
          <pv-tag severity="warning" >{{character.location.name === 'Earth (Replacement Dimension)'? 'Eart' : character.location.name  }}</pv-tag>
        </div>
      </template>

    </pv-card>
</template>

<style scoped>
.card {
  width: 80%;
  text-align: center;
  color: #2b3467;
  font-size: 80%;
  /* Estilos adicionales aquí */
}


.card img {
  width: 80%;
}
</style>