<template>
  <v-flex xs12 sm6 md6 lg4>
    <v-card height="100%">
      <v-card-media :src="document.image" height="200px"></v-card-media>
      <v-card-title>
        <div class="headline">{{document.title}}</div>
      </v-card-title>
      <v-card-text>
        <div class="subheading">{{this.formattedStartDate}} - {{this.formattedClosingDate}}</div>
        <div class="subheading">{{document.description}}</div>
      </v-card-text>
      <v-card-actions>
        <v-progress-circular
          :value="this.percentagePassed"
          :color="this.daysRemaining > 30 ? 'primary' : 'red'">
          {{this.daysRemaining}}
        </v-progress-circular>
        <v-btn icon color="primary"><v-icon>comment</v-icon></v-btn>
        <span>{{document.comments}} Comments</span>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'DocumentListItem',
    props: ['document'],
    components: {
    },
    computed: {
      daysRemaining: function() {
        let endDate = moment(this.document.closingDate);
        let today = moment(new Date());

        return endDate.diff(today, 'days');
      },
      percentagePassed: function() {
        let startDate = moment(this.document.startDate);
        let endDate = moment(this.document.closingDate);
        let today = moment(new Date());

        let total = endDate.diff(startDate, 'days');
        let passed  = today.diff(startDate, 'days');

        return (passed / total) * 100;
      },
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
