<template>
  <v-layout>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <document-list-item v-for="(item, i) in documents" :document="item" :key="i"/>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
</template>

<script>
  import DocumentListItem from './DocumentListItem.vue';

  export default {
    name: 'DocumentList',
    props: ['documents'],
    components: {
      'document-list-item': DocumentListItem
    }
  }
</script>

<style lang="scss" scoped>
  .document-list {
    font-size: 1.2rem;
  }
</style>
