<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { fetchSneakersbyId } from '@/API/api'
import { onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

// import { computed } from 'vue'

const route = useRoute()
const productId = route.params.id

const product = ref({})

// const productId = this.$route.params

onMounted(async () => {
  product.value = await fetchSneakersbyId(productId)
})
</script>

<template>
  <button class="bg-lime-500 p-1 rounded-md hover:bg-lime-600 mb-4">Go back</button>
  <div class="flex flex-col mb-10">
    <div class="flex justify-between items-center flex-nowrap gap-8 mb-4">
      <img class="flex-1 w-1/3" :src="product.imageUrl" :alt="product.title" />
      <div class="flex flex-col gap-8">
        <h2 class="text-xl font-semibold">{{ product.title }}</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex ut optio explicabo
          temporibus necessitatibus suscipit saepe ea error? Ipsam natus doloribus at obcaecati
          beatae ducimus consequuntur atque quam ut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio ex ut optio explicabo temporibus necessitatibus suscipit saepe ea
          error? Ipsam natus doloribus at obcaecati beatae ducimus consequuntur atque quam ut.
        </h3>
        <p class="text-lg"><span class="font-semibold">Ціна:</span> {{ product.price }} грн</p>
      </div>
    </div>

    <button
      class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
    >
      Додати до кошика
    </button>
  </div>
</template>
