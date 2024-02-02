<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar]
    }
  }
}
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
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

<!-- <swiper
    class="image-slider swiper-container"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    ><div class="image-slider__wraper swiper-wraper">
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
    </div>
  </swiper> -->
