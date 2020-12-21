<template>
  <section class="section mb-5">
    <h3 class="mb-5">Corriger votre othogrographe et traduisez vos textes dans différents langues</h3>
    <Layout>
      <div class="container">

        <div class="row mt-5">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <model-select :options="array_corrector" v-model="verify.value" class="form pt-3 mb-2"></model-select>
            <div class="form-group">
              <textarea class="form-control" v-model="verify.text" rows="2" name="value"  ></textarea>
              <div v-if="isError" class=" text-center mt-3 alert alert-danger" role="alert">
                {{errors.first('value')}}
              </div>
            </div>
          </div>

          <div class="w-100"></div>

          <div class="col-sm text-left p-3 p-sm-3">
            <button type="button" @click="handleClickVerify" class="btn btn-primary btn-lg mr-5">Corriger l'orthographe</button>
          </div>

          <div class="w-100"></div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <model-select :options="options" v-model="translate.from" class="form pt-3 mb-2 "></model-select>
            <div class="form-group">
              <textarea class="form-control" v-model="translate.text_from" rows="2" name="value"  ></textarea>
              <div v-if="isError" class=" text-center mt-3 alert alert-danger" role="alert">
                {{errors.first('value')}}
              </div>
            </div>
          </div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <model-select :options="options" v-model="translate.to" class="form pt-3 mb-2"></model-select>
            <div class="form-group">
              <textarea class="form-control" v-model="translate.text_to" rows="2" name="value"  ></textarea>
              <div v-if="isError" class=" text-center mt-3 alert alert-danger" role="alert">
                {{errors.first('value')}}
              </div>
            </div>
          </div>

          <div class="w-100"></div>
          <div class="col-sm text-left p-3 p-sm-3">
            <button type="button" @click="handleClickTranslate" class="btn btn-primary btn-lg mr-5">Traduire</button>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "@/components/Utils/Layout";
import { ModelSelect } from 'vue-search-select'
import Reverso from 'reverso-api';
export default {
  name: 'Lettre',
  components: {Layout, ModelSelect},
  data(){
    return{
      verify:{
        text:'',
        correct:'',
        value:'french'
      },
     text:'Saisissez votre texte',
     translate:{
       from:'english',
       text_from:'',
       to:'french',
       text_to:''
     },
      isError:false,
      options:[
        {
          text:'english',
          value:'english',
        },
        {
          text:'french',
          value:'french',
        },
        {
          text:'german',
          value:'german'
        },
        {
          text:'russian',
          value:'russian'
        },
        {
          text:'italian',
          value:'italian'
        },
        {
          text:'polish',
          value:'polish'
        },
        {
          text:'spanish',
          value:'spanish'
        }
      ],
      array_corrector: [
        {
          text:'english',
          value:'english',
        },
        {
          text:'french',
          value:'french',
        },
      ]
    }
  },
  methods:{
    handleClickVerify(){
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('html',this.verify.text)
          const reverso = new Reverso();
          reverso.getSpellCheck(this.verify.text, this.verify.value).then(response => {
            console.log(response);
           if(response.length > 0){
              this.verify.correct = '';
              let correct_words = response[0].full_corrected.split(' ');
              const words = response[0].text.split(' ');

              if (correct_words.length == words.length){
                for (let i=0; i < correct_words.length; i++){
                  if(correct_words[i] !== words[i]){
                    correct_words[i] = '<span style="color:green">' +correct_words[i]+ '</span>';
                  }
                  this.verify.correct+= ' ' + correct_words[i];
                }
              }
            }
          }).catch(err => {
            return console.error(err);
          });
        }
        else
        {
          this.isError= true;
        }
      });
    },
    handleClickTranslate(){
      this.$validator.validateAll().then(result => {
        if (result) {
          const reverso = new Reverso();
          reverso.getContext('Hello !', 'english', 'french').then(response => {
            return console.log('tr',response);
          }).catch(err => {
            return console.error(err);
          });
        }
        else
        {
          this.isError = true;
        }
      });
    },
  }
}
</script>
<style scoped>
.btn-primary{
  background-color: var(--app-primary-color);
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}
textarea {
  resize: none;
}
.highlight {
  color: green;
}
</style>


