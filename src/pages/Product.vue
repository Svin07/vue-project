<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { fetchSneakersbyId } from '@/API/api'
import { inject, onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

const onClickAdd = inject('onClickAdd')

const route = useRoute()
const productId = route.params.id

const product = ref({})

onMounted(async () => {
  product.value = await fetchSneakersbyId(productId)
})
</script>

<template>
  <router-link to="/"
    ><button class="bg-lime-500 p-1 rounded-md hover:bg-lime-600 mb-4">Go back</button></router-link
  >

  <div class="grid grid-cols-3 gap-8 mb-4">
    <img class="" :src="product.imageUrl" :alt="product.title" />
    <div class="flex flex-col gap-8">
      <h2 class="text-xl font-semibold text-center">{{ product.title }}</h2>
      <h3 class="max-w-68 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex ut optio explicabo
        temporibus necessitatibus suscipit saepe ea error? Ipsam natus doloribus at obcaecati beatae
        ducimus consequuntur atque quam ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio ex ut optio explicabo temporibus necessitatibus suscipit saepe ea error? Ipsam natus
        doloribus at obcaecati beatae ducimus consequuntur atque quam ut.
      </h3>
      <p class="text-lg"><span class="font-semibold">Ціна:</span> {{ product.price }} грн</p>
      <button
        @click="
          () => {
            onClickAdd(product)
          }
        "
        class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
      >
        Додати до кошика
      </button>
    </div>
    <div class="w-50">
      <h3 class="block text-xl font-semibold">Оплата/Доставка</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">Доставка</h4>
      <ul class="text-sm list-disc ml-4">
        <li>по Україні "Нова пошта"</li>
        <li>по Україні "Укрпошта"</li>
      </ul>
      <h4 class="text-lg font-semibold mt-4 mb-2">Оплата</h4>
      <ul class="text-sm list-disc ml-4">
        <li>Банківський переказ</li>
        <li>Електронний гаманець</li>
      </ul>
    </div>
  </div>
</template>
