<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container fluid>
        <document-list :documents='documents'/>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import data from './data';
  import AppHeader from './components/common/AppHeader.vue';
  import AppFooter from './components/common/AppFooter.vue';
  import DocumentList from './components/documents/DocumentList.vue';

  export default {
    name: 'Main',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'document-list': DocumentList
    },
    data() {
      return {
        documents: data.documents
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
