<script setup>
import { onMounted, onUpdated, provide, ref } from 'vue'

import PageHeader from './components/PageHeader.vue'

import { fetchSneakers, fetchSneakersbyId, updatedIsAdded } from './API/api'

import DrawerBar from './components/DrawerBar.vue'

const items = ref([])
const drawerOpen = ref(false)
const isAdded = ref(false)
const countItemsInCart = ref(0)
const orderItems = ref({})

const body = document.body

onMounted(async () => {
  items.value = await fetchSneakers()
  countItemsInCart.value = items.value.filter((value) => value.isAdded === true).length
})

onUpdated(() => {
  countItemsInCart.value = items.value.filter((value) => value.isAdded === true).length
})

const onClickAdd = async (item) => {
  const data = await fetchSneakersbyId(item.id)
  isAdded.value = !data.isAdded
  item.isAdded = isAdded.value

  await updatedIsAdded(item.id, isAdded.value)
  const newProducts = await fetchSneakers()
  items.value = newProducts
}

const toggleDrawer = () => {
  //вмикаємо-вимикаємо модалку(корзину)
  drawerOpen.value = !drawerOpen.value
  //вмикаємо-вимикаємо скролл головної сторінки на момент відкриття модлки(корзини)
  drawerOpen.value ? body.classList.add('disable-scroll') : body.classList.remove('disable-scroll')
}

const createOrderPage = (order) => {
  orderItems.value = order
}

provide('onClickAdd', onClickAdd)
provide('toggleDrawer', toggleDrawer)
provide('createOrderPage', createOrderPage)
provide('orderItems', orderItems)
</script>

<template>
  <DrawerBar v-if="drawerOpen" />
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <PageHeader :countItemsInCart="countItemsInCart" />

    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
