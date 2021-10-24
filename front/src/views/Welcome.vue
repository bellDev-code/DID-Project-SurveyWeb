<template>
  <main class="profile-page">
    <MyPageBasic />

    <Card123 />

    <Card123 />
    <Card123 />
  </main>
</template>
<script>
import MyPageBasic from "../tejin/MyPageBasic.vue";

import Card123 from "../tejin/Card.vue";
export default {
  name: "",
  components: { MyPageBasic, Card123 },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
