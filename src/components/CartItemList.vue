<script setup>
import CartItem from './CartItem.vue'

defineProps({
  cartItems: Array
})
const emit = defineEmits(['onClickClose'])
</script>

<template>
  <div class="flex flex-col gap-5">
    <CartItem
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      :id="cartItem.id"
      :title="cartItem.title"
      :imageUrl="cartItem.imageUrl"
      :price="cartItem.price"
      :isAdded="cartItem.isAdded"
      :onClickAdd="() => emit('onClickClose', cartItem.id)"
    />
  </div>
</template>
