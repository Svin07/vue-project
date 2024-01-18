<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['onClickFavorite', 'onClickAdd'])
</script>
<template>
  <div class="grid grid-cols-4 gap-5">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="item.isAdded"
      :isFavorite="item.favorite"
      :onClickAdd="() => emit('onClickAdd', item)"
      :onClickFavorite="
        () => {
          emit('onClickFavorite', item)
        }
      "
    />
  </div>
</template>
