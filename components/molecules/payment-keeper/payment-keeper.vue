<template>
  <div class="payment-sec__keeper">
    <div class="payment-sec__details">
      <h4 class="payment-sec__details-title">
        Детали заказа
      </h4>
      <div class="payment-sec__detail-keeper">
        <div class="payment-sec__detail">
          <h6>Услуга</h6>
          <h4>Курс “Основы языка Python”</h4>
        </div>
        <div class="payment-sec__detail">
          <h6>Время занятий</h6>
          <h4>Пн, Вт, Ср - 14:00</h4>
        </div>
        <div class="payment-sec__detail">
          <h6>Стоимость</h6>
          <h4>15 000 ₽</h4>
        </div>
      </div>
    </div>
    <div class="payment-sec__methods">
      <h4 class="paymenr-sec__methods-title">
        Выберите способ платежа
      </h4>
      <div class="payment-sec__methods-keeper">
        <div class="payment-sec__method payment-sec__method_current">
          <img src="@/assets/icons/payment/visa.svg" alt="">
        </div>
        <div class="payment-sec__method">
          <img src="@/assets/icons/payment/mastercard.svg" alt="">
        </div>
        <div class="payment-sec__method">
          <img src="@/assets/icons/payment/mir.svg" alt="">
        </div>
        <div class="payment-sec__method">
          <img src="@/assets/icons/payment/yandex-money.svg" alt="">
        </div>
        <div class="payment-sec__method">
          <img src="@/assets/icons/payment/qiwi.svg" alt="">
        </div>
        <div class="payment-sec__method">
          <img src="@/assets/icons/payment/paypal.svg" alt="">
        </div>
      </div>
      <form class="payment-sec__form" action="#" method="GET">
        <div class="payment-sec__form-row">
          <div class="payment-sec__form-group payment-sec__form-group_mid">
            <label class="payment-sec__form-label" for="nomer">Номер Карты</label>
            <input id="nomer" class="payment-sec__form-input" type="number" name="nomer" placeholder="Номер карты">
          </div>
          <div class="payment-sec__form-group payment-sec__form-group_small">
            <label class="payment-sec__form-label" for="srok">Срок действия</label>
            <input id="srok" class="payment-sec__form-input" type="text" name="srok" placeholder="Месяц/Год">
          </div>
          <div class="payment-sec__form-group payment-sec__form-group_small">
            <label class="payment-sec__form-label" for="ccv">
              CCV<svg
                class="payment-sec__form-label-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="12" rx="6" fill="#5181B8" />
                <path d="M5.07047 6.867V6.543C5.07047 6.243 5.13347 5.991 5.25947 5.787C5.38547 5.583 5.60147 5.37 5.90747 5.148C6.17747 4.956 6.36947 4.791 6.48347 4.653C6.60347 4.509 6.66347 4.341 6.66347 4.149C6.66347 3.957 6.59147 3.813 6.44747 3.717C6.30947 3.615 6.11447 3.564 5.86247 3.564C5.61047 3.564 5.36147 3.603 5.11547 3.681C4.86947 3.759 4.61747 3.864 4.35947 3.996L3.88247 3.033C4.17647 2.871 4.49447 2.739 4.83647 2.637C5.17847 2.535 5.55347 2.484 5.96147 2.484C6.58547 2.484 7.06847 2.634 7.41047 2.934C7.75847 3.234 7.93247 3.615 7.93247 4.077C7.93247 4.323 7.89347 4.536 7.81547 4.716C7.73747 4.896 7.62047 5.064 7.46447 5.22C7.30847 5.37 7.11347 5.532 6.87947 5.706C6.70547 5.832 6.57047 5.94 6.47447 6.03C6.37847 6.12 6.31247 6.207 6.27647 6.291C6.24647 6.375 6.23147 6.48 6.23147 6.606V6.867H5.07047ZM4.92647 8.37C4.92647 8.094 5.00147 7.902 5.15147 7.794C5.30147 7.68 5.48447 7.623 5.70047 7.623C5.91047 7.623 6.09047 7.68 6.24047 7.794C6.39047 7.902 6.46547 8.094 6.46547 8.37C6.46547 8.634 6.39047 8.826 6.24047 8.946C6.09047 9.06 5.91047 9.117 5.70047 9.117C5.48447 9.117 5.30147 9.06 5.15147 8.946C5.00147 8.826 4.92647 8.634 4.92647 8.37Z" fill="white" />
              </svg>
            </label>
            <input id="ccv" class="payment-sec__form-input" type="text" name="ccv" placeholder="CCV">
          </div>
        </div>
        <div class="payment-sec__form-group">
          <label class="payment-sec__form-label" for="name">Держатель карты</label>
          <input id="name" class="payment-sec__form-input" type="text" name="name" placeholder="Фамлия и имя">
        </div>
        <div class="payment-sec__save">
          <label class="payment-sec__save-label" for="save">
            <input id="save" name="save" type="checkbox" class="payment-sec__save-checkbox">
            <div class="payment-sec__checkbox-input_custom">
              <div class="payment-sec__checkbox-input-active" />
            </div>
            Сохранить данные карты
          </label>
        </div>
        <div class="payment-sec__submit-keeper">
          <button class="button button_primary payment-sec__submit-button" type="submit" disabled>
            Оплатить 15 000 ₽
          </button>
          <div class="payment-sec__agreement-keeper">
            Нажимая кнопку «Оплатить», вы <br>
            присоединяетесь к <a href="">условиям оферты</a>.
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./payment-keeper.js"></script>
<style scoped src="./payment-keeper.css"></style>
