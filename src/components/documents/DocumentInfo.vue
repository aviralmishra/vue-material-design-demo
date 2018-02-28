<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{document.title}}</td>
      <td class="text-xs-right">{{document.description}}</td>
      <td class="text-xs-right">{{this.formattedStartDate}}</td>
      <td class="text-xs-right">{{this.formattedClosingDate}}</td>
      <td class="text-xs-right">{{document.comments}} Comments</td>
    </template>
  </v-data-table>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'DocumentInfo',
    props: ['document'],
    data () {
      return {
        headers: [
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Start', value: 'startDate' },
          { text: 'End', value: 'closingDate' },
          { text: 'Comments', value: 'comments' }
        ],
        items: [document]
      }
    },
    computed: {
      formattedStartDate: function() {
        return moment(new Date(this.document.startDate)).format('DD MMM YYYY');
      },
      formattedClosingDate: function() {
        return moment(new Date(this.document.closingDate)).format('DD MMM YYYY');
      }
    }
  }
</script>

<style lang="scss" scoped>
  $list-item-color: #0011ee;

  .document-list-item {
    color: $list-item-color;
  }
</style>
