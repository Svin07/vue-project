<script setup>
import { onMounted, onUpdated, provide, ref } from 'vue'

import PageHeader from './components/PageHeader.vue'

import { fetchSneakers, fetchSneakersbyId, updatedIsAdded } from './API/api'

import DrawerBar from './components/DrawerBar.vue'

const items = ref([])
const drawerOpen = ref(false)
const isAdded = ref(false)
const countItemsInCart = ref(0)

onMounted(async () => {
  items.value = await fetchSneakers()
  countItemsInCart.value = items.value.filter((value) => value.isAdded === true).length
  console.log(countItemsInCart.value)
})

onUpdated(() => {
  countItemsInCart.value = items.value.filter((value) => value.isAdded === true).length
  console.log(countItemsInCart.value)
})

const onClickAdd = async (item) => {
  const data = await fetchSneakersbyId(item.id)
  isAdded.value = !data.isAdded
  item.isAdded = isAdded.value

  await updatedIsAdded(item.id, isAdded.value)
  const newProducts = await fetchSneakers()
  items.value = newProducts
}

// watch(onClickAdd, () => {})

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

provide('onClickAdd', onClickAdd)
provide('toggleDrawer', toggleDrawer)
</script>

<template>
  <DrawerBar v-if="drawerOpen" />
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <PageHeader :countItemsInCart="countItemsInCart" />

    <div class="p-10">
      <router-view></router-view>
      <!-- <Home :products="items" /> -->
    </div>
  </div>
</template>

<style scoped></style>
