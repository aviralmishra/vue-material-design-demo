<template>
  <v-app light>
    <app-header></app-header>
    <v-content>
      <v-container>
        <app-welcome :config="config"></app-welcome>
        <document-list-hero-item :document="heroDocument"/>
        <document-list :documents="documents"/>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import data from './../data';
  import AppHeader from './common/AppHeader.vue';
  import AppFooter from './common/AppFooter.vue';
  import AppWelcome from './common/AppWelcome.vue';
  import DocumentList from './documents/DocumentList.vue';
  import DocumentListHeroItem from './documents/DocumentListHeroItem.vue';

  export default {
    name: 'Home',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-welcome': AppWelcome,
      'document-list': DocumentList,
      'document-list-hero-item': DocumentListHeroItem
    },
    data() {
      return {
        config: data.config,
        heroDocument: data.documents[0],
        documents: data.documents.slice(1, data.documents.length)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
