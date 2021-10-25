<template>
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="General"
          >I'm the first fading tab
          <b-card>it's me</b-card>
        </b-tab>
        <b-tab title="Edit profile">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
        </b-tab>
        <b-tab title="Premium Plan">
          <Cards />
        </b-tab>
        <b-tab title="Info">I'm the last tab</b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button variant="success" @click="tabIndex--">Previous</b-button>
        <b-button variant="warning" @click="tabIndex++">Next</b-button>
      </b-button-group>

      <div class="text-muted">Current Tab: {{ tabIndex }}</div>
    </div>
  </div>
</template>

<script>
import Cards from './Cards.vue'
export default {
  data() {
    return {
      tabIndex: 1
    }
  },
  components: { Cards }
}
</script>
