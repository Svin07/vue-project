<script setup>
import { ref, onMounted, inject } from 'vue'
import { fetchSneakersSortBy, createOrder } from '../API/api'
import DrawerBarHead from './DrawerBarHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const toggleDrawer = inject('toggleDrawer')
const onClickAdd = inject('onClickAdd')

const cartItems = ref([])
const totalPrice = ref(0)
const totalTax = ref(0)
const orderId = ref(null)

onMounted(async () => {
  const params = {
    isAdded: true
  }

  cartItems.value = await fetchSneakersSortBy(params)

  totalPrice.value = cartItems.value.reduce((acc, item) => acc + item.price, 0)
  totalTax.value = Math.ceil((totalPrice.value / 100) * 5)
})

const onClickCreateOrder = async () => {
  const order = {
    cart: cartItems.value,
    totalPrice: totalPrice.value
  }

  const result = await createOrder(order)

  await result.cart.map((item) => {
    const deletedItem = { id: item.id }

    onClickAdd(deletedItem)
  })

  orderId.value = result.id

  cartItems.value = []
  totalPrice.value = 0
  totalTax.value = 0
}

const onClickClose = async (id) => {
  const index = cartItems.value.findIndex((cartItem) => cartItem.id === id)
  cartItems.value.splice(index, 1)

  const deletedItem = {
    id
  }
  onClickAdd(deletedItem)

  totalPrice.value = cartItems.value.reduce((acc, item) => acc + item.price, 0)
  totalTax.value = Math.ceil((totalPrice.value / 100) * 5)
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="fixed top-0 right-0 h-full w-96 bg-white z-20 p-8 overflow-auto">
    <DrawerBarHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        imgUrl="/package-icon.png"
        title="Кошик пустий"
        description="Додайте в кошик хоча б один товар, щоб зробити замовлення"
      />
    </div>

    <CartItemList v-if="totalPrice" :cartItems="cartItems" @on-click-close="onClickClose" />

    <div v-if="totalPrice" class="flex flex-col gap-4 my-7">
      <div class="flex gap-2">
        <span>Загальна сума: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} грн</b>
      </div>
      <div class="flex gap-2">
        <span>Податок 5%: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalTax }} грн</b>
      </div>
    </div>
    <router-link to="/toorder">
      <button
        v-if="totalPrice"
        @click="onClickCreateOrder(), toggleDrawer()"
        class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
      >
        Оформити замовлення
      </button>
    </router-link>
  </div>
</template>
