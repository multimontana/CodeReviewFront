<template>
  <div class="course-sec__information">
    <div class="course-sec__icon-keeper">
      <img class="course-sec__icon" src="../../../assets/icons/python_icon.svg" alt="">
    </div>
    <div class="course-sec__property">
      <h6>Формат</h6>
      <h4>Онлайн-курс</h4>
    </div>
    <div class="course-sec__property">
      <h6>Длительность</h6>
      <h4>1 месяц</h4>
    </div>
    <div class="course-sec__property">
      <h6>Количество занятий</h6>
      <h4>8 уроков</h4>
    </div>
    <div class="course-sec__price-keeper">
      <h4 class="course-sec__price-title">
        Стоимость
      </h4>
      <span class="course-sec__price">15 000 ₽</span>
    </div>
    <hr>
    <div class="course-sec__choose-time-block">
      <h4 class="course-sec__choose-time-title">
        Выберите время занятий
      </h4>
      <div class="course-sec__day-keeper">
        <div class="course-sec__day" :class="{'active': activeDay === 0}" data-value="day_0" @click="changeActiveDay(0)">
          <span class="course-sec__days">Пн, Ср, Пт</span>
          <custom-select class="course-sec__select" :options="times" />
        </div>
        <div class="course-sec__day" :class="{'active': activeDay === 1}" data-value="day_1" @click="changeActiveDay(1)">
          <span class="course-sec__days">Вт, Чт, Сб</span>
          <custom-select class="course-sec__select" :options="times" />
        </div>
      </div>
      <Button class="course-sec__button" theme="primary" :disabled="activeDay === null">
        Перейти к оплате
      </Button>
    </div>
    <hr>
    <div class="course-sec__profession">
      <h4 class="course-sec__profession-title">
        Курс входит в профессии
      </h4>
      <img class="course-sec__profession-image" src="@/assets/icons/php_profession.svg" alt="">
      <h4 class="course-sec__profession-name">
        Веб-разработки
      </h4>
    </div>
  </div>
</template>
<script src="./course-information.js"></script>
<style scoped src="./course-information.css"></style>
