<template>
  <main>
    <nav>
      <Navbar/>
    </nav>

    <section class="container-fluid content">
      <slot></slot>
    </section>

    <footer>
      <Footer/>
    </footer>

  </main>
</template>

<script>
import Navbar from "@/components/Navbar/Index";
import Footer from "@/components/Footer/Index";
export default {
name: "AppLayout",
  components: {Navbar, Footer}
}
</script>