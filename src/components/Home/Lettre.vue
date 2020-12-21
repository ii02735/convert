<template>
  <section class="mb-5">
    <h3 class="mb-5">Convertisseur de lettres majuscules en minuscules et minuscules en majuscules</h3>
    <Layout>
      <div class="container">
        <div class="row mt-5">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="form-group">
              <textarea class="form-control" v-model="text" rows="5" name="value" v-validate="'required'" ></textarea>
              <div v-if="isError" class=" text-center mt-3 alert alert-danger" role="alert">
                {{errors.first('value')}}
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col-sm text-left p-3 p-sm-3">
            <button type="button" @click="upperText" class="btn btn-primary btn-lg mr-5">Convertir en majuscule</button>
            <button type="button" @click="lowerText" class="btn btn-primary btn-lg mt-2 mt-md-0 mt-lg-0">Convertir en minuscule</button>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "@/components/Utils/Layout";
export default {
  name: 'Lettre',
  components: {Layout},
  data(){
    return{
     text:'Saisissez votre texte',
      isError:false,
    }
  },
  methods:{
    upperText(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = this.text.toUpperCase();
          this.isError = false;
        }
        else
        {
          this.isError= true;
        }
      });
    },
    lowerText(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = this.text.toLocaleLowerCase();
          this.isError = false;
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
  min-width: 30px;
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}
textarea {
  resize: none;
}
</style>


