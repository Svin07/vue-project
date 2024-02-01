<script></script>

<template>
  <!-- Разметка слайдера (html код) -->
  <div class="itcss">
    <div class="itcss__wrapper">
      <div class="itcss__items">
        <div class="itcss__item">
          <!-- Контент 1 слайда -->
        </div>
        <div class="itcss__item">
          <!-- Контент 2 слайда -->
        </div>
        <div class="itcss__item">
          <!-- Контент 3 слайда -->
        </div>
        <div class="itcss__item">
          <!-- Контент 4 слайда -->
        </div>
      </div>
    </div>
    <!-- Стрелки для перехода к предыдущему и следующему слайду -->
    <a class="itcss__control itcss__control_prev" href="#" role="button" data-slide="prev"></a>
    <a class="itcss__control itcss__control_next" href="#" role="button" data-slide="next"></a>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.css';

.swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>
