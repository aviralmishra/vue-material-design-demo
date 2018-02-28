<template>
  <v-jumbotron height="120">
    <v-container>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-1">Welcome</h3>
          <span class="subheading">{{config.welcomeText}}</span>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'DocumentInfo',
    props: ['config'],
  }
</script>
