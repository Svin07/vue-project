<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

import PageHeader from './components/PageHeader.vue'
import CardList from './components/CardList.vue'
import {
  fetchSneakers,
  fetchSneakersSortBy,
  updatedFavorites,
  fetchSneakersbyId,
  updatedIsAdded
} from './API/api'

import DrawerBar from './components/DrawerBar.vue'

const items = ref([])
const drawerOpen = ref(false)
const isFavorite = ref(false)
const isAdded = ref(false)

const filters = reactive({
  sortBy: 'id',
  searchQuery: ''
})

const onChangeSelect = (evt) => {
  filters.sortBy = evt.target.value
}

const onChangeSearchInput = (evt) => {
  filters.searchQuery = evt.target.value
}

onMounted(async () => {
  items.value = await fetchSneakers()
})

const deletedFromCartandUpdate = async (deletedItem) => {
  const data = await fetchSneakersbyId(deletedItem.id)

  const item = items.value.find((item) => item.id === deletedItem.id)

  isAdded.value = !data.isAdded
  item.isAdded = isAdded.value

  await updatedIsAdded(item.id, isAdded.value)
}

const onClickAdd = async (item) => {
  const data = await fetchSneakersbyId(item.id)
  isAdded.value = !data.isAdded
  item.isAdded = isAdded.value

  await updatedIsAdded(item.id, isAdded.value)
}

const onClickFavorite = async (item) => {
  const data = await fetchSneakersbyId(item.id)
  isFavorite.value = !data.favorite
  item.favorite = isFavorite.value

  await updatedFavorites(item.id, isFavorite.value)
}

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

watch(filters, async () => {
  const params = {
    sortBy: filters.sortBy
  }

  if (filters.searchQuery) {
    params.title = filters.searchQuery
  }

  items.value = await fetchSneakersSortBy(params)
})
</script>

<template>
  <DrawerBar
    v-if="drawerOpen"
    @toggle-drawer="toggleDrawer"
    @deletedFromCartandUpdate="deletedFromCartandUpdate"
  />
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <PageHeader @toggle-drawer="toggleDrawer" />

    <div class="p-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold">Усі кросівки</h2>

        <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
          <option value="id">По порядку</option>
          <option value="title">По назві</option>
          <option value="price">По ціні (спочатку дешеві)</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3.5" src="/search.svg" alt="Search" />
          <input
            @input="onChangeSearchInput"
            class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
            type="text"
            placeholder="Шукати..."
          />
        </div>
      </div>
      <CardList :items="items" @onClickAdd="onClickAdd" @onClickFavorite="onClickFavorite" />
    </div>
  </div>
</template>

<style scoped></style>
