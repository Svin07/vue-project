<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


import 'swiper/css/bundle'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination]
    }
  }
}
</script>

<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
      '--swiper-pagination-bullet-width': '15px',
      '--swiper-pagination-bullet-height': '15px'
    }"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
  >
    <swiper-slide class="image-slider__slide swiper-slide"
      ><div class="image-slider__image">
        <img src="/sneakers/slider_1eebe349312ced27-min.jpg" alt="photo-1" />
      </div>
    </swiper-slide>
    <swiper-slide class="image-slider__slide swiper-slide"
      ><div class="image-slider__image">
        <img src="/sneakers/slider_3a1b6f166119ea1d29f-min.jpg" alt="photo-2" />
      </div>
    </swiper-slide>
    <swiper-slide class="image-slider__slide swiper-slide"
      ><div class="image-slider__image">
        <img src="/sneakers/slider_bef6ec9c94ce17c1a79a-min.jpg" alt="photo-3" />
      </div>
    </swiper-slide>
    <swiper-slide class="image-slider__slide swiper-slide"
      ><div class="image-slider__image">
        <img src="/sneakers/slider_valentines_d5773-min.jpeg" alt="photo-4" />
      </div>
    </swiper-slide>
 
  </swiper>
</template>

<style scoped>
.swiper {
  margin-bottom: 40px;
  background-color: #d0dace;
  max-width: 980px;
  height: 400px;
}
</style>


