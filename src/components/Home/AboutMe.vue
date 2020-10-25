<template>
  <section class="mb-5">
    <article class="layout-me container">
      <div class="container">

        <div class="row">
            <div class="col-sm pt-5 p-3 p-sm-3 mt-3 text-left">
              <img src="../../assets/logo.png"> MAREGA Oumar
            </div>

            <div class="w-100 mb-3"></div>

            <div class="col-sm p-3 p-sm-3 text-left">
              <p>Je suis MAREGA Oumar, actuellement en dernier année de master 2 expert informatique & systéme d'information : spécialité
                Architecte web et big data.
              </p>
              <p>
                Je suis en alternance en tant que développeur informatique chez une entreprise de la place depuis 2
                ans.
              </p>
            </div>

            <div class="w-100 mb-3"></div>

            <div class="col-sm p-3 p-sm-3">
               <h4 class="text-left">Mon stack technique du moment</h4>
                <hr>
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Back-end
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body text-left">
                      <ul>
                        <li>Laravel</li>
                        <li>Node js</li>
                        <li>Symfony</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Front-end
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body text-left">
                      <ul>
                        <li>Vuejs</li>
                        <li>ReactJS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        DevOps
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body text-left">
                      <ul>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>AWS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-100 mb-3"></div>

            <div class="col-sm p-3 p-sm-3 text-left">
              <h4 class="text-left">Autes langages</h4>
              <hr>
              <span class="" >Avant de me spécialiser plus dans le dévelopement web et mobile avec des langauages comme <strong>PHP</strong> et <strong>javascript</strong>, jusqu'en Licence Informatique mes projets étaient principalement basés sur des langages comme : </span>
              <ul>
                <li>C/C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
        </div>

        <div class="row">
          <div class="col-sm p-3 p-sm-3 text-left">
            <h4>Réseux sociaux</h4>
            <hr>
          </div>
          <div class="w-100" ></div>
          <div class="col-sm p-3 p-sm-3 text-left">
            <div id="linkedin" class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="fr_FR" data-type="horizontal" data-theme="light" data-vanity="oumar-marega"><a target="_blank" class="LI-simple-link" href='https://www.linkedin.com/in/oumar-marega?trk=profile-badge'>Oumar MAREGA</a></div>
          </div>
          <div class="col-sm p-3 p-sm-3 text-left">
            <div class="card" style="width: 18rem;">
              <img src="../../assets/linked-in.png" class="card-img-top" alt="git">
              <div class="card-body">
                <h6 class="card-title">Oumar MAREGA</h6>
                <span class="card-text">228 contributions in the last year</span>
                <br>
                <span class="card-text">14 publics repositories</span>
                <br>
                <br>
                <a href="#" target="_blank" class="btn btn-outline-primary">
                  Voir le profil
                </a>
                <img class="float-right" src="../../assets/github.png">
              </div>
            </div>
          </div>

        </div>

      </div>
    </article>
  </section>
</template>
<script>
import postscribe from 'postscribe';
export default {
  name:"AboutMe",
  data() {
    return {}
  },
  mounted() {
    postscribe('#linkedin', '<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer><\/script>')
  }
}
</script>
<style scoped>
.layout-me {
  font-family: serif;
  border-radius: 8px;
  border-color: white;
  background-color: white;
  box-shadow: 0px 0px 20px #555;
  min-height: 40rem !important;
}
hr{
  margin-top: 0px;
}
img{
  width: 30px;
}
</style>

