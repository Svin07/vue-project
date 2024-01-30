<script setup>
import { inject } from 'vue'

import CartCounter from './CartCounter.vue'
import Logo from './Logo.vue'

const toggleDrawer = inject('toggleDrawer')

defineProps({
  countItemsInCart: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-100 px-10 py-8">
    <router-link to="/"><Logo /></router-link>
    <ul class="flex items-center gap-10">
      <li
        @click="toggleDrawer"
        class="flex items-center cursor-pointer gap-1 text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <CartCounter :countItemsInCart="countItemsInCart" />
        <b>Кошик</b>
      </li>
      <router-link to="/favorites"
        ><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="Heart" />
          <span>Закладки</span>
        </li></router-link
      >

      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Profile" />
        <span>Профіль</span>
      </li>
    </ul>
  </header>
</template>
