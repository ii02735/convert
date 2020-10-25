<template>
  <section class="mb-5">
    <h3 class="mb-5">Convertissez vos nombres en binaire, quaternaire, octal, décimal et héxadécimal </h3>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <input class="form-control form" v-model="data.value"  name="value" v-validate="'required'" placeholder="Ex: 101" type="text">
            <div v-if="isError" class=" mt-3 alert alert-danger" role="alert">
              {{msg}}
            </div>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="base"
                          v-model="data.from_base"
                          class="form pt-3">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" value="to" type="text" readonly>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="base"
                          v-model="data.to_base"
                          class="form pt-3">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" v-model="result" type="text" placeholder="Your result..." readonly>
          </div>
          <div class="w-100 mb-5"></div>
          <div class="col-sm text-lg-center text-md-center text-sm-left text-left p-3 p-sm-3">
            <button type="button" @click="convert" class="btn btn-primary btn-lg">Convertir</button>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "@/components/Utils/Layout";
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'Base',
  components: {Layout,ModelSelect},
  data(){
    return{
      result:null,
      data:{
        value:null,
        from_base:2,
        to_base:10,
      },
      base:[
        {
          value:2,
          text:'Binaire'
        },
        {
          value:4,
          text:'Quartenaire'
        },
        {
          value:8,
          text:'Octal'
        },
        {
          value:10,
          text:'Décimal'
        },
        {
          value:16,
          text:'Héxadécimal'
        }
      ],
      isError: false,
      msg:''
    }
  },
  methods:{
    convert(){
      const self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$axios.get(`${this.$own_api_url}/convert`,{
            params: {
              value: this.data.value,
              from_base: this.data.from_base,
              to_base: this.data.to_base
            }})
              .then(function (response) {
               self.result = response.data.result
                self.isError = false;
              })
              .catch(() => {
                this.isError = true;
                this.msg = this.data.value + ' n\'est pas une valeur de la base ' + this.data.from_base
              });
        }
        else
        {
          this.isError = true;
        }
      });
    }
  }
}
</script>
<style scoped>
@media (min-width: 578px) {
  .row{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
}
.btn-primary{
  background-color: var(--app-primary-color);
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}
.form{
  min-height: 50px !important;
}
</style>
