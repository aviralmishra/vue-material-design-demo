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
  import data from './data';
  import AppHeader from './components/common/AppHeader.vue';
  import AppFooter from './components/common/AppFooter.vue';
  import AppWelcome from './components/common/AppWelcome.vue';
  import DocumentList from './components/documents/DocumentList.vue';
  import DocumentListHeroItem from './components/documents/DocumentListHeroItem.vue';

  export default {
    name: 'Main',
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
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
