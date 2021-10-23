<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full min-h-screen">
        <router-view />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

export default {
  data() {
    return {
      hello: null,
    };
  },
  components: {
    Navbar,
    FooterSmall,
  },
};
</script>
