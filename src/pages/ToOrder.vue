<script setup>
import { fetchOrders } from '@/API/api'
import { onMounted, ref } from 'vue'

import CartItemList from '../components/CartItemList.vue'

const items = ref([])
const orderId = ref('')
const orderTotalPrice = ref(null)

onMounted(async () => {
  const allOrders = await fetchOrders()
  const lastElementIndex = allOrders.length - 1
  const { cart, id, totalPrice } = allOrders[lastElementIndex]
  items.value = cart
  orderId.value = id
  orderTotalPrice.value = totalPrice
})
</script>
<template>
  <h1>Оформлення замовлення</h1>
  <h4>Заповніть наступні поля для розміщення замовлення.</h4>

  <h2>Ваші персональні данні</h2>
  <div>
    <form class="">
      <label class="contacts-form-field"
        ><span class="contacts-form-input-name">Name</span>
        <span class="contacts-form-input-wrp">
          <input
            type="text"
            class="contacts-form-input"
            name="Name"
            required
            pattern="^[a-zA-Zа-яА-ЯїЇіІ]+$"
            minlength="2"
          /><svg class="contacts-form-icon" width="18" height="18">
            <use href="./images/icons.svg#icon-person-black-18dp-1"></use>
          </svg>
        </span>
      </label>

      <label class="contacts-form-field"
        ><span class="contacts-form-input-name">Surname</span>
        <span class="contacts-form-input-wrp">
          <input
            type="text"
            class="contacts-form-input"
            name="Surname"
            required
            pattern="^[a-zA-Zа-яА-ЯїЇіІ]+$"
            minlength="2"
          /><svg class="contacts-form-icon" width="18" height="18">
            <use href="./images/icons.svg#icon-person-black-18dp-1"></use>
          </svg>
        </span>
      </label>

      <label class="contacts-form-field"
        ><span class="contacts-form-input-name">Phone</span>
        <span class="contacts-form-input-wrp">
          <input
            type="tel"
            class="contacts-form-input"
            name="Phone"
            required
            pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$"
            title="+38(044)555-55-55" /><svg class="contacts-form-icon" width="18" height="24">
            <use href="./images/icons.svg#icon-phone-black-18dp-1"></use></svg></span
      ></label>

      <label class="contacts-form-field"
        ><span class="contacts-form-input-name">Email</span>
        <span class="contacts-form-input-wrp">
          <input
            type="email"
            class="contacts-form-input"
            name="Email"
            required
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            title="nick@mail.com" /><svg class="contacts-form-icon" width="18" height="24">
            <use href="./images/icons.svg#icon-email-black-18dp-1"></use></svg></span
      ></label>
    </form>

    <label class="contacts-form-field"
      ><span class="contacts-form-input-name">Comment</span
      ><textarea class="contacts-form-message" placeholder="Text input" name="Message"></textarea>
    </label>
  </div>

  <h2>
    Ваше замовлення №: <span class="text-lg font-bold text-lime-600">{{ orderId }}</span>
  </h2>
  <CartItemList :cartItems="items" />
  <h2>
    На загальну сумму:
    <span class="text-lg font-bold text-lime-600">{{ orderTotalPrice }}</span> грн
  </h2>

  <h2>
    Ми зв'яжемося з Вами, якщо у оператора виникнуть питання при комплектації Вашого замовлення
  </h2>
</template>
