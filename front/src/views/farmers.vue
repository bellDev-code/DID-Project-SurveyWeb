<template>
  <div>
    <Nav />
    <PageHeader title="Farmers" />
    <Farmers />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Farmers from "../components/Farmers";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      PageHeader,
      Farmers,
      Nav
    },
    head(){
      return {
        title: "Agrikol  | Farmers"
      }
    }
  }
</script>
