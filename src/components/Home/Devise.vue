<template>
  <section class="mb-5" >
    <h3 class="mb-5">Convertissez vos devises en toute simplicité </h3>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <input class="form-control form" v-model="amount"  name="value" v-validate="'required|numeric'" placeholder="Ex: 500" type="text">
            <div v-if="isError" class=" mt-3 alert alert-danger" role="alert">
              {{errors.first('value')}}
            </div>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="array_devise"
                          v-model="from_value"
                          class="form pt-3">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" value="to" type="text" readonly>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="array_devise"
                          v-model="to_value"
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
import devise from '../../../public/data/devise.json'

export default {
  name: 'Devise',
  components: {Layout,ModelSelect},
  data(){
    return{
      result:null,
      amount:null,
      array_devise:[],
      from_value:'EUR',
      to_value:'XOF',
      isError: false
    }
  },
  methods:{
    convert(){
      const self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$axios.get(`${this.$url_devise}?q=${this.from_value}_${this.to_value}&compact=ultra&apiKey=${this.$url_devise_key}`)
              .then(function (response) {
                const obj_value = Object.values(response.data)
                console.log(self.result, self.amount)
                self.result = (obj_value[0] * self.amount).toFixed(2);
                console.log(self.result, self.amount)
                self.isError = false;
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else
        {
          this.isError = true;
        }
      });
    }
  },
  mounted(){
    const tab_devise =Object.values(devise.results);
    this.array_devise = tab_devise.map(item => {
         return {
           text: item.currencyName + ' ' + item.currencyId,
           value: item.currencyId
         }
    })
   // this.array_devise.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name && t.id===v.id))===i)
    this.array_devise = [...new Map(this.array_devise.map(item => [item.value, item])).values()] // delete doublon

    this.array_devise.sort((a, b) => (a.text > b.text) ? 1 : -1)
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
