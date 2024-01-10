<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 transition cursor-pointer hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        @click="onClickFavorite"
        :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
        alt="Like"
        class="absolute top-8 left-8"
      />
      <img :src="imageUrl" alt="{{title}}" />
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="text-slate-400 mt-5">ЦІНА: </span>
          <b>{{ price }} грн</b>
        </div>
        <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" />
      </div>
    </div>
  </div>
</template>
