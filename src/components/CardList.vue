<script setup>
import { inject } from 'vue'
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['onClickFavorite'])

const onClickAdd = inject('onClickAdd')
</script>
<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="item.isAdded"
      :isFavorite="item.favorite"
      :onClickAdd="
        () => {
          onClickAdd(item)
        }
      "
      :on-click-favorite="() => emit('onClickFavorite', item)"
    />
  </div>
</template>
