<template>
  <div class="card">
    <pv-toolbar class="toolbar">
      <template #start>
        <h3>Rick And Morty App</h3>
      </template>

      <template #end>
        <router-link to="/characters">
          <pv-button icon="pi pi-user" severity="success" class="mr-2" />
        </router-link>

        <router-link to="/home">
          <pv-button icon="pi pi-home" severity="danger" />
        </router-link>


      </template>
    </pv-toolbar>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .toolbar{
    background-color: rgba(242, 241, 241, 0.49);
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

h3{
  margin: 0;

  font-size: 1.2rem;
  color: #213547;
}

</style>