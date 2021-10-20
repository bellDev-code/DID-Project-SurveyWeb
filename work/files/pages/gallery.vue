<template>
  <div>
    <Nav />
    <PageHeader title="Gallery" />
    <Gallery />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Gallery from "../components/Gallery";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      PageHeader,
      Gallery,
      Nav
    },
    head(){
      return {
        title: "Agrikol  | Gallery"
      }
    }
  }
</script>
