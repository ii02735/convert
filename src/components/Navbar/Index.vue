<template>
    <section class="container-fluid mynav">
        <nav class="navbar shadow-lg navbar-expand-lg navbar-dark text-left fixed-top bg-dark">
            <article class="container" >
              <router-link class="nav-link mr-lg-5 mr-md-5" :to="{name: 'home'}">
                <div class="logo text-center"><img  src="../../assets/logo.png" alt="logo"/></div>
              </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'base'}">Base</router-link>
                      </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'devise'}">Devise </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'distance'}">Distance</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'masse'}">Masse</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'resolution'}">Résolution</router-link>
                        </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'lettre'}">Lettre</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'hash'}">Hash</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'generate-password'}">Générer mot de passe</router-link>
                      </li>

                    </ul>
                    <ul class="navbar-nav " data-children-count="1">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'me'}">Qui suis je ? </router-link>
                      </li>
                    </ul>
                </div>
            </article>
        </nav>
    </section>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>
.bg-dark{
    background-color: #232935 !important;
}
.router-link-active{
  color: var(--app-primary-color) !important;
}
.logo{
  background-color: white;
  min-width: 31.5px;
  min-height: 31.5px;
}
.logo img{
  margin: 0 auto;
  height:30px;
}
</style>
