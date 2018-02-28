<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm12 md12 lg12>
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-card-media :src="document.image" height="100%"></v-card-media>
            </v-flex>
            <v-flex xs7>
              <v-layout row justify-space-between>
                <v-card-title><div class="headline">{{document.title}}</div></v-card-title>
                <v-card-title>
                  <div><v-btn icon color="primary"><v-icon>comment</v-icon></v-btn>{{document.comments}}</div>
                </v-card-title>
              </v-layout>
              <v-card-text class="my-0 py-0">
                <v-progress-linear
                  :value="this.percentagePassed"
                  :color="this.daysRemaining > 30 ? 'primary' : 'red'"
                  class="my-0 py-0">
                  {{this.daysRemaining}}
                </v-progress-linear>
              </v-card-text>
              <v-layout row justify-space-between class="my-0 py-0">
                <div>
                  <v-card-text>
                    <span class="text-xs-left caption">
                      {{this.formattedStartDate}}
                    </span>
                  </v-card-text>
                </div>
                <div>
                  <v-card-text>
                    <span class="text-xs-left caption">
                      {{this.daysRemaining}} days remaining
                    </span>
                  </v-card-text>
                </div>
                <div>
                  <v-card-text>
                    <span class="text-xs-right caption">
                      {{this.formattedClosingDate}}
                    </span>
                  </v-card-text>
                </div>
              </v-layout>
              <v-card-text class="my-0 py-0">
                <div class="subheading">{{document.description}}</div>
              </v-card-text>
              <v-card-actions class="ml-1">
                <v-btn class="primary mt-5" dark>READ</v-btn>
                <v-btn class="primary mt-5" dark>LEARN MORE</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import moment from 'moment';
  import DocumentInfo from './DocumentInfo.vue';

  export default {
    name: 'DocumentListItem',
    props: ['document'],
    components: {
      'document-info': DocumentInfo
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
