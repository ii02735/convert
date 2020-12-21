<template>
  <div id="app">
    <AppLayout>
      <router-view></router-view>
    </AppLayout>
  </div>
</template>

<script>
  import AppLayout from "@/components/Utils/AppLayout";
  export default{
    name: "App",
    components:{AppLayout}
  }
</script>

<style>
:root {
  --app-primary-color: #24c8a6;
  --app-secondary-color: #232935;
}
#app {
  font-family: Avenir, Helvetica, Arial, monospace;
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
    margin-top: 125px;
    min-height: 43rem;
  }
</style>
