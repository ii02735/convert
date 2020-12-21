<template>
  <section class="mb-5" id="App">
    <article class="layout-me container">
      <div class="container text-left justify-content-end">
        <p class="mb-4 text-justify c-text">
          Convert something est une boîte à outils qui vous permet de réaliser vos opérations quotidiennes.
          Convertissez vos devises (eur, xof, dollar ...), vos bases (binaire, décimal, hexadécimal ...),
          vos distances (kilomètre, mètre ...), vos masses (kilogramme, gramme ...), vos résolutions (px, rem) ou encore de générer vos mots de passe,
          chiffrer vos données (Sha256, Mdb5, Aes)
          et de conversion de tout un texte en majuscules ....
        </p>


        <div class="c-text">
          <p>
            Breaking news :
          </p>
        </div>
        <div id="carousel" class="carousel slide c-text" data-ride="carousel" data-bs-ride="carousel" data-interval="5000">
          <ol class="carousel-indicators">
            <li data-target="#carousel"  v-for="(item, index) in data" :key="index" :class="{ active: index==0 }" :data-slide-to="index"></li>
          </ol>
          <div class="carousel-inner" role="listbox" >
            <div class="carousel-item" v-for="(item, index) in data" :key="index" :class="{ active: index==0 }">
              <div class="card">
                <h5 class="card-header">{{item.title}}</h5>
                <div class="card-body">
                  <img class="card-img" :src="item.urlToImage" :alt="item.title" />
                  <p class="card-text mt-3">{{item.content}}</p>
                  <p class="card-link text-center mt-3">
                    <a  :href="item.url" target="_blank" class="btn btn-primary text-center btn-lg mt-4 mb-4">Voir plus</a>
                  </p>

                </div>
              </div>
            </div>
            <!-- /.carousel-item -->
          </div>
          <!-- /.carousel-inner -->
          <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="text-danger sr-only">Next</span>
          </a>
        </div>
        <!-- /.carousel -->


      </div>
    </article>
  </section>
</template>
<script>
export default {
  name:"Description",
  data(){
    return{
      data:[]
    }
  },
  mounted(){
    this.$axios.get(this.$url_news).then(res => {
       this.data = res.data.articles;
    }).catch(e => {
      console.log(e);
    })
  }
}
</script>
<style scoped>
.layout-me {
  font-family: serif;
  border-radius: 8px;
  border-color: white;
  background-color: white;
  box-shadow: 0px 0px 0px #555;
  min-height: 40rem !important;
}
.card{
  background-color: var(--app-secondary-color);
  color: white;
}
.btn-primary{
  background-color: var(--app-primary-color);
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}
.btn-primary{
  background-color: var(--app-primary-color);
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}
@media (min-width: 600px) {
  .card-img{
    margin: 0 auto;
    height: 250px !important;
  }
}
.c-text{
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, monospace;
}
</style>