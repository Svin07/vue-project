<script setup>
import { onMounted, ref } from 'vue'

import PageHeader from './components/PageHeader.vue'
import CardList from './components/CardList.vue'
import fetchSneakers from './API/api'

// import DrawerBar from './components/DrawerBar.vue'

const items = ref([])

onMounted(async () => {
  items.value = await fetchSneakers()
})
</script>

<template>
  <!-- <DrawerBar /> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <PageHeader />

    <div class="p-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold">Усі кросівки</h2>

        <select class="py-2 px-3 border rounded-md outline-none">
          <option>По назві</option>
          <option>По ціні (спочатку дешеві)</option>
          <option>По ціні (спочатку дорогі)</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3.5" src="/search.svg" alt="Search" />
          <input
            class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
            type="text"
            placeholder="Шукати..."
          />
        </div>
      </div>
      <CardList :items="items" />
    </div>
  </div>
</template>

<style scoped></style>
