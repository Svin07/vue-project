<script setup>
defineProps({
  countItemsInCart: Number
})
</script>
<template>
  <div class="w-5 h-5 bg-gray-400 rounded-full flex justify-center items-center">
    <p class="text-white font-semibold">{{ countItemsInCart }}</p>
  </div>
</template>
