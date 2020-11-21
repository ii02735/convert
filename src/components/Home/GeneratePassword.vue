<template>
  <section class="mb-5">
    <h3 class="mb-5">Convertisseur de lettres majuscules en minuscules et vis-versa</h3>
    <Layout>
      <div class="container">
        <div class="row mt-5 text-left">

          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="lenght">longueur</span>
              </div>
              <input type="text" v-model="length" class="form-control col-4">
            </div>
          </div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" v-model="number" class="custom-control-input" id="number">
              <label class="custom-control-label" for="number">Nombre</label>
            </div>
          </div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" v-model="symbol" class="custom-control-input" id="symbol">
              <label class="custom-control-label" for="symbol">Symbôle</label>
            </div>
          </div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" v-model="lowercase" class="custom-control-input" id="lowercase">
              <label class="custom-control-label" for="lowercase">Minuscule</label>
            </div>
          </div>

          <div class="col-sm pt-5 p-3 p-sm-3">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" v-model="uppercase"  class="custom-control-input" id="uppercase">
              <label class="custom-control-label" for="uppercase">Majuscule</label>
            </div>
          </div>

          <div class="w-100" ></div>

          <div class="col-sm text-lg-center text-md-center text-sm-left p-3 p-sm-3"><button type="button" @click="generate" class="btn btn-primary btn-sm mr-5">Générer</button></div>

          <div class="w-100" ></div>

          <textarea v-if="isVisible" class="form-control" v-model="text" rows="5"></textarea>
          <div class="w-100 mb-5" ></div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "@/components/Utils/Layout";
import generator from 'generate-password';
export default {
  name: 'Hash',
  components: {Layout},
  data(){
    return{
      isError:false,
      isVisible:false,
      text:'',
      length:10,
      number:true,
      symbol:true,
      lowercase:true,
      uppercase:true,

    }
  },
  methods:{
    generate(){
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log(this.length, this.number)
          this.text = generator.generate({
            length: this.length,
            numbers: this.number,
            symbols: this.symbol,
            lowercase: this.lowercase,
            uppercase: this.uppercase,
          });
          this.isVisible = true;
        }
        else this.isError= true;
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

.btn{
  min-width: 9.8rem;
  min-height: 50px;
  text-align: center;
}
</style>


