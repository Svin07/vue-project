<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import debounce from 'lodash.debounce'

import { onMounted, reactive, ref, watch } from 'vue'

import CardList from '../components/CardList.vue'
import SliderBar from '../components/SliderBar.vue'
import { fetchSneakersSortBy, updatedFavorites, fetchSneakersbyId, fetchSneakers } from '../API/api'

// const props = defineProps({
//   products: Array
// })

const items = ref([])

const isFavorite = ref(false)

const filters = reactive({
  sortBy: 'id',
  searchQuery: ''
})

onMounted(async () => {
  items.value = await fetchSneakers()
})

// onUpdated(async () => {
//   items.value = props.products
// })

const onChangeSelect = async (evt) => {
  filters.sortBy = evt.target.value
}

const onChangeSearchInput = debounce((evt) => {
  filters.searchQuery = evt.target.value
}, 1000)

const onClickFavorite = async (item) => {
  const data = await fetchSneakersbyId(item.id)
  isFavorite.value = !data.favorite
  item.favorite = isFavorite.value

  await updatedFavorites(item.id, isFavorite.value)
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
  <SliderBar />
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
  <CardList :items="items" @on-click-favorite="onClickFavorite" />
</template>
