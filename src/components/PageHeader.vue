<script setup></script>

<template>
  <header class="flex justify-between border-b border-slate-100 px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10" />
      <div>
        <h1 class="text-xl font-bold">VUE SNEAKERS</h1>
        <p class="text-slate-500">Магазин кращих кросівок</p>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart" />
        <b>1205 грн.</b>
      </li>
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="Heart" />
        <span>Закладки</span>
      </li>
      <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Profile" />
        <span>Профіль</span>
      </li>
    </ul>
  </header>
</template>
