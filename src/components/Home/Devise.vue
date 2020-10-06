<template>
  <section>
    <h3 class="mb-5">Convertissez vos devises en toute simplicité </h3>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <model-select :options="array_devise"
                          v-model="from_value"
                          class="selected">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control" value="to" type="text" readonly>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="array_devise"
                          v-model="to_value"
                          class="selected">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control" v-model="result" type="text" placeholder="Your result..." readonly>
          </div>
          <div class="w-100 mb-5"></div>
          <div class="col-sm text-lg-center text-md-center text-sm-left text-left p-3 p-sm-3">
            <button type="button" class="btn btn-primary btn-lg">Convertir</button>
          </div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
// @ is an alias to /src

import Layout from "@/components/Utils/Layout";
import { ModelSelect } from 'vue-search-select'

import devise from '../../../public/data/devise.json'
export default {
  name: 'Devise',
  components: {Layout,ModelSelect},
  data(){
    return{
      result:'',
      array_devise:[],
      from_value:'EUR',
      to_value:'XOF',
      searchOptions: [
        { text: 'Option nr 1', value: 'Option 1' },
        { text: 'Option nr 2', value: 'Option 2' },
        { text: 'Option nr 3', value: 'Option 3' },
        { text: 'Option nr 4', value: 'Option 4' },
        { text: 'Option nr 5', value: 'Option 5' }
      ]
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
    this.array_devise = [...new Map(this.array_devise.map(item => [item.value, item])).values()]

    this.array_devise.sort((a, b) => (a.text > b.text) ? 1 : -1)
    console.log(this.array_devise.sort())
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
</style>
