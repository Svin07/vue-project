<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { fetchSneakersSortBy } from '@/API/api'

import { onMounted, ref } from 'vue'

import ProductCard from '@/components/ProductCard.vue'

const favoriteItems = ref([])

onMounted(async () => {
  const params = {
    favorite: true
  }

  favoriteItems.value = await fetchSneakersSortBy(params)
})
</script>

<template>
  <h2>Закладки</h2>

  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <ProductCard
      v-for="item in favoriteItems"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="item.isAdded"
      :isFavorite="item.favorite"
    />
  </div>
</template>
