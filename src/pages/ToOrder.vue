<script setup>
import { fetchOrders } from '@/API/api'
import { onMounted, ref } from 'vue'

import CartItemList from '../components/CartItemList.vue'
import InfoBlock from '../components/InfoBlock.vue'

const items = ref([])
const orderId = ref('')
const orderTotalPrice = ref(null)

setTimeout(
  onMounted(async () => {
    const allOrders = await fetchOrders()
    const lastElementIndex = allOrders.length - 1
    const { cart, id, totalPrice } = allOrders[lastElementIndex]
    items.value = cart
    orderId.value = id
    orderTotalPrice.value = totalPrice
  }),
  1000
)

const onClickClose = (id) => {
  const positiveItems = items.value.filter((item) => item.id !== id)
  items.value = positiveItems
  orderTotalPrice.value = positiveItems.reduce((acc, item) => acc + item.price, 0)
}

const handlyButton = () => {
  items.value = []
  orderId.value = ''
  orderTotalPrice.value = null
  console.log('очищаємо всі данні')
  console.log(items.value)
}
</script>
<template>
  <h1 class="font-semibold text-xl leading-6 tracking-wide mb-1">Оформлення замовлення</h1>

  <InfoBlock
    v-if="!orderTotalPrice"
    imgUrl="/order-success-icon.png"
    title="Замовлення створене!"
    :description="`Ваше замовлення №${orderId} незабаром буде передано до служби доставки`"
  />
  :

  <div v-if="orderTotalPrice">
    <h4 class="font-light text-sm leading-6 tracking-wide mb-4">
      Заповніть наступні поля для розміщення замовлення.
    </h4>
    <div class="flex justify-between gap-4">
      <form autocomplete="on" class="flex flex-col gap-4 w-1/2">
        <div
          role="group"
          aria-labelledby="contact-details-head"
          class="border border-dotted border-slate-500 p-2 rounded bg-lime-100"
        >
          <p id="contact-details-head" class="font-medium text-base leading-6 tracking-wide w-full">
            Ваші персональні данні
          </p>

          <label class="cursor-text"
            ><span class="block font-normal text-xs leading-5 tracking-wider mb-1 text-slate-600"
              >Ім'я*</span
            >

            <input
              type="text"
              class="font-normal text-xs leading-5 tracking-wider w-full h-10 border border-solid border-stone-500 rounded pl-9 transition focus:border-none focus:outline-none focus:ring focus:ring-lime-600"
              name="Name"
              required
              pattern="^[a-zA-Zа-яА-ЯїЇіІ]+$"
              minlength="2"
            />
          </label>

          <label class="cursor-text"
            ><span class="block font-normal text-xs leading-5 tracking-wider mb-1 text-slate-600"
              >Прізвище*</span
            >

            <input
              type="text"
              class="font-normal text-xs leading-5 tracking-wider w-full h-10 border border-solid border-stone-500 rounded pl-9 transition focus:border-none focus:outline-none focus:ring focus:ring-lime-600"
              name="Surname"
              required
              pattern="^[a-zA-Zа-яА-ЯїЇіІ]+$"
              minlength="2"
            />
          </label>

          <label class="cursor-text"
            ><span class="block font-normal text-xs leading-5 tracking-wider mb-1 text-slate-600"
              >Мобільний телефон*</span
            >

            <input
              type="tel"
              class="font-normal text-xs leading-5 tracking-wider w-full h-10 border border-solid border-stone-500 rounded pl-9 transition focus:border-none focus:outline-none focus:ring focus:ring-lime-600"
              name="Phone"
              required
              pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$"
              title="+38(044)555-55-55"
          /></label>

          <label class="cursor-text"
            ><span class="block font-normal text-xs leading-5 tracking-wider mb-1 text-slate-600"
              >Електронна пошта*</span
            >

            <input
              type="email"
              class="font-normal text-xs leading-5 tracking-wider w-full h-10 border border-solid border-stone-500 rounded pl-9 transition focus:border-none focus:outline-none focus:ring focus:ring-lime-600"
              name="Email"
              required
              pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
              title="nick@mail.com"
          /></label>

          <label class="cursor-text"
            ><span class="block font-normal text-xs leading-5 tracking-wider mb-1 text-slate-600"
              >Примітка</span
            ><textarea
              class="font-normal text-xs leading-5 tracking-wider w-full h-30 border border-solid border-stone-500 rounded px-4 py-2 resize-none transition focus:border-none focus:outline-none focus:ring focus:ring-lime-600"
              placeholder="Напишіть щось..."
              name="Message"
            ></textarea>
          </label>
        </div>

        <div
          role="group"
          aria-labelledby="contact-details-body"
          class="border border-dotted border-slate-500 p-2 rounded bg-lime-100"
        >
          <p
            id="contact-details-body"
            class="font-medium text-base leading-6 tracking-wide w-full mb-2"
          >
            Виберіть спосіб доставки
          </p>
          <img width="104px" src="/novapost.png" alt="novapost" />
          <label class="block my-4">
            <input type="radio" name="delivery" value="NovaPoshta" />
            Нова Пошта
          </label>
          <img width="84px" src="/ukrposhta.png" alt="ukrpost" />
          <label class="block my-4">
            <input type="radio" name="delivery" value="UkrPoshta" />

            Укрпошта
          </label>
        </div>

        <div
          role="group"
          aria-labelledby="contact-details-body"
          class="border border-dotted border-slate-500 p-2 rounded bg-lime-100"
        >
          <p
            id="contact-details-body"
            class="font-medium text-base leading-6 tracking-wide w-full mb-2"
          >
            Виберіть спосіб оплати
          </p>
          <img width="104px" src="/LiqPay.png" alt="LiqPay" />
          <label class="block my-4">
            <input type="radio" name="payment" value="LiqPay" />
            LiqPay
          </label>
          <img width="84px" src="/webmoney.png" alt="Webmoney" />
          <label class="block my-4">
            <input type="radio" name="payment" value="Webmoney" />

            Webmoney
          </label>
        </div>

        <button
          type="submit"
          @click="handlyButton()"
          class="block transition bg-lime-500 w-full mx-auto rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
        >
          Готово
        </button>
      </form>

      <section class="border-8 border-solid border-lime-100 p-2 rounded">
        <h2 class="font-medium text-base leading-6 tracking-wide mb-8 w-full">
          Деталі замовлення:
        </h2>
        <h2 class="mb-8">
          Ваше замовлення №: <span class="text-lg font-bold text-lime-600">{{ orderId }}</span>
        </h2>
        <CartItemList :cartItems="items" @on-click-close="onClickClose" />
        <h2 class="mt-8">
          На загальну сумму:
          <span class="text-lg font-bold text-lime-600">{{ orderTotalPrice }}</span> грн
        </h2>
      </section>
    </div>

    <h2 class="font-light text-sm leading-6 tracking-wide mt-4">
      Ми зв'яжемося з Вами, якщо у оператора виникнуть питання при комплектації Вашого замовлення
    </h2>
  </div>
</template>
