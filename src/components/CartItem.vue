<script setup>
defineProps({
  id: String,
  imageUrl: String,
  title: String,
  price: Number,
  onClickAdd: Function
})
</script>

<template>
  <div class="flex items-center border border-slate-100 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="imageUrl" :alt="title" />
    <div class="flex flex-col justify-between ml-2">
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between">
        <b>{{ price }} грн</b>
        <img
          @click="onClickAdd"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt="close"
        />
      </div>
    </div>
  </div>
</template>
