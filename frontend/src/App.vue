<template>
  <div>
    <Nav />

    <router-view />
  </div>
</template>
<script>
import Nav from '../src/components/layouts/Nav.vue'

export default {
  components: { Nav }
}
</script>
