<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="language-changer">
    <span class="language">
      <dropdown-keeper class="header__language-keeper" content-class="header__language-dropdown" :opener-class="'header__language-button'" :opener-style="{background: `url(${require(`@/assets/icons/language-flags/${$i18n.locale}.svg`)}) center center no-repeat, var(--white)`}">
        <template v-slot:content>
          <div v-for="(lang) in $i18n.locales" :key="lang.code" class="header__language" :class="{'header__language_active':$i18n.locale === lang.code}" @click="changeLang(lang.code)">
            <img :src="require(`@/assets/icons/language-flags/${lang.code}.svg`)" :alt="`${lang.name} flag`">
            <p>{{ lang.name }}</p>
          </div>

        </template>
      </dropdown-keeper>
    </span>
  </div>
</template>
<script src="./language.js"></script>
<style scoped src="./language.css"></style>
