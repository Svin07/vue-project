<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})

const isAdded = ref(false)
const isFavorite = ref(false)

const onClickAdd = () => {
  isAdded.value = !isAdded.value
}
const onClickFavorite = () => {
  isFavorite.value = !isFavorite.value
}
</script>
<template>
  <div class="grid grid-cols-4 gap-5">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="isAdded"
      :isFavorite="isFavorite"
      :onClickAdd="onClickAdd"
      :onClickFavorite="onClickFavorite"
      false
    />
  </div>
</template>
