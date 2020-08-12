<template>
  <div id="app">
    <main>
      <nav>
        <Navbar/>
      </nav>

      <section class="container-fluid content">
        <router-view></router-view>
      </section>

      <footer>
        <Footer />
      </footer>

    </main>
  </div>
</template>

<script>
  import Navbar from "../src/components/Navbar/Index"
  import Footer from "../src/components/Footer/Index"
  export default{
    name: "App",
    components:{
      Navbar,
      Footer
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  .content{
    margin-top: 10%;
  }
</style>
