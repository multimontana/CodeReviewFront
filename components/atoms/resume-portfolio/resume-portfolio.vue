<template>
  <div v-if="visibleFull">
    <div class="summary__page summary__page_empty">
      <button class="button button_white summary__responsive-menu-opener">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="4"
            y="15"
            height="2"
            width="16"
            rx="1"
            fill="#272C31"
          />
          <rect
            x="4"
            y="7"
            height="2"
            width="16"
            rx="1"
            fill="#272C31"
          />
        </svg>
      </button>
      <div v-if="!getPortfolios.length" class="summary__empty-content">
        <h3>Портфолио пусто</h3>
        <article>
          Добавляйте свои проекты, чтобы работодатели посмотрели
          <br>
          ваши работы и оценили их
        </article>
        <button class="button button_primary" @click="addProject">
          Добавить проект
        </button>
      </div>
      <div v-else class="summary__page">
        <button class="button button_white summary__responsive-menu-opener">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="4"
              y="15"
              height="2"
              width="16"
              rx="1"
              fill="#272C31"
            />
            <rect
              x="4"
              y="7"
              height="2"
              width="16"
              rx="1"
              fill="#272C31"
            />
          </svg>
        </button>
        <div class="summary__content">
          <div class="summary__project-keeper">
            <summary-item v-for="(portfolio, index) in getPortfolios" :key="index" :portfolio="portfolio" />
            <summary-item-modal />
          </div>
          <hr class="summary__projects-divider">
          <button class="button button_primary summary__add-button" @click="addProject">
            Добавить проект
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <project-add-section />
  </div>
</template>
<script src="./resume-portfolio.js"></script>
<style scoped src="./resume-portfolio.css"></style>
