<template>
  <section class="mb-5 c-text ">
    <article class="layout-me container">
      <div class="container">

        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3 mt-3 text-left">
            <img width="30" height="30" src="../../assets/logo.png" alt="me"> MAREGA Oumar
          </div>

          <div class="w-100 mb-3"></div>

          <div class="col-sm p-3 p-sm-3 text-left">
            <p>Je suis MAREGA Oumar, actuellement en dernière année de master 2 expert informatique & système d'informations : spécialité
              Architecte web et big data.
            </p>
            <p>
              Je suis en alternance en tant que développeur informatique chez une entreprise de la place depuis 2
              ans.
            </p>
          </div>

          <div class="w-100 mb-3"></div>

          <div class="col-sm p-3 p-sm-3">
            <h4 class="text-left">Ma stack technique du moment</h4>
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
                      <li>Python</li>
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
            <h4 class="text-left">Autes languages</h4>
            <hr>
            <span class="" >Avant de me spécialiser plus dans le développement web et mobile avec des languages comme <strong>PHP</strong> et <strong>javascript</strong>, jusqu'en Licence Informatique mes projets étaient principalement basés sur des langages comme : </span>
            <ul>
              <li>C/C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-sm p-3 p-sm-3 text-left">
            <h4>Réseaux sociaux</h4>
            <hr>
          </div>
          <div class="w-100" ></div>
          <div class="col-sm p-3 p-sm-3 text-left">
            <div id="linkedin" class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="fr_FR" data-type="horizontal" data-theme="dark" data-vanity="oumar-marega"><a target="_blank" class="LI-simple-link" href='https://www.linkedin.com/in/oumar-marega?trk=profile-badge'>Oumar MAREGA</a></div>
          </div>
          <div class="col-sm force p-3 p-sm-3 text-left">
            <div id="github-profile-card" data-id="OUMAREGA" data-background="#303336" data-color="white" data-is-circle-image="true" data-name="🎉" data-width="400" data-height="1080"  />
          </div>

        </div>

        <div class="row">
          <div class="col-sm p-3 p-sm-3 text-left">
            <h4>Laisser un message</h4>
            <hr>
          </div>
          <div class="w-100" ></div>
          <div class="col-sm p-3 p-sm-3 text-left container">
            <form>
              <label for="fname">Prénom</label>
              <input type="text" v-model="form.first_name" id="fname" v-validate="'required|alpha_dash'" name="firstname" placeholder="Votre prénom..">
              <div v-if="errors.first('firstname')" class=" mt-3 alert alert-danger" role="alert">
                {{errors.first('firstname')?'Le champ prénom est requis':''}}
              </div>

              <label for="lname">Nom</label>
              <input type="text" v-model="form.last_name" id="lname" name="lastname" v-validate="'required|alpha_dash'" placeholder="Votre nom..">
              <div v-if="errors.first('lastname')" class=" mt-3 alert alert-danger" role="alert">
                {{errors.first('lastname')?'Le champ nom est requis':''}}
              </div>

              <label for="lname">Email</label>
              <input type="text" v-model="form.email" id="email" name="email" v-validate="'required|email'" placeholder="Votre email..">
              <div v-if="errors.first('email')" class=" mt-3 alert alert-danger" role="alert">
                {{errors.first('email')?'un champ email est attendu':''}}
              </div>

              <label for="subject">Message</label>
              <textarea id="subject" v-model="form.message" name="subject" v-validate="'required'" placeholder="Saisissez votre message.." style="height:200px"></textarea>
              <div v-if="errors.first('subject')" class=" mt-3 alert alert-danger" role="alert">
                {{errors.first('subject')?'Le champ message est requis':''}}
              </div>

              <button type="button" @click="send" class="btn-send btn-primary btn-lg">Envoyer</button>

              <div v-if="success" class=" mt-3 alert alert-success" role="alert">
                Mail envoyé ! Merci pour votre message
              </div>

            </form>
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
    return {
      form:{
        first_name:'',
        last_name:'',
        email:'',
        message:''
      },
      success: false
    }
  },
  methods:{
    send(){
      this.$validator.validateAll().then(result => {
        if (result) {
          const self = this;
          this.$axios.post(`${this.$own_api_url}/api/send/message/notification`, this.form)
              .then(function (response) {
                self.success = true;
              })
              .catch(() => {

              });
        }
      }).catch((error) => {
          console.log("ici")
          console.log(error)
      });
    }
  },
  mounted() {
    postscribe('#linkedin', '<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer><\/script>')
    postscribe('#github-profile-card', '<script type="text/javascript" src="https://unpkg.com/github-profile-card-component@latest/lib/scripts/index.js" async defer><\/script>')
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

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.btn-send {
  background-color: var(--app-primary-color);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-send:hover {
  background-color: var(--app-secondary-color);
}


.github-profile-card {
  background-color: red !important;
}
.c-text{
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, monospace;
}
</style>