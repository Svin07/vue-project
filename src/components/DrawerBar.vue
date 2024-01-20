<script setup>
import { ref, onMounted } from 'vue'
import { fetchSneakersSortBy } from '../API/api'
import DrawerBarHead from './DrawerBarHead.vue'
import CartItemList from './CartItemList.vue'
const emit = defineEmits(['toggleDrawer', 'deletedFromCartandUpdate', 'calculateTotalPrice'])

const cartItems = ref([])

onMounted(async () => {
  const params = {
    isAdded: true
  }
  cartItems.value = await fetchSneakersSortBy(params)
})

// emit('calculateTotalPrice', cartItems)

const onClickClose = async (id) => {
  const index = cartItems.value.findIndex((cartItem) => cartItem.id === id)
  cartItems.value.splice(index, 1)

  const deletedItem = {
    id
  }
  emit('deletedFromCartandUpdate', deletedItem)
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="fixed top-0 right-0 h-full w-96 bg-white z-20 p-8">
    <DrawerBarHead @toggle-drawer="emit('toggleDrawer')" />
    <CartItemList :cartItems="cartItems" @on-click-close="onClickClose" />

    <div class="flex flex-col gap-4 my-7">
      <div class="flex gap-2">
        <span>Загальна сума: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>1269 грн</b>
      </div>
      <div class="flex gap-2">
        <span>Податок 5%: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>62 грн</b>
      </div>
    </div>
    <button
      disabled=""
      class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
    >
      Оформити замовлення
    </button>
  </div>
</template>
