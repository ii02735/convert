<template>
  <section class="mb-5" >
    <h3 class="mb-5">Convertissez vos masses en milligramme, centigramme, décigramme, gramme, décagramme, hectogramme et kilogramme </h3>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <input class="form-control form" v-model="data.value"  name="value" v-validate="'required|numeric'" placeholder="Ex: 1000" type="text">
            <div v-if="isError" class=" mt-3 alert alert-danger" role="alert">
              {{errors.first('value')}}
            </div>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="masse"
                          v-model="data.from_masse"
                          class="form pt-3">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" value="to" type="text" readonly>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="masse"
                          v-model="data.to_masse"
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
import { evaluate } from 'mathjs'
import Layout from "@/components/Utils/Layout";
import {ModelSelect} from "vue-search-select";
export default {
  name: 'Masse',
  components: {Layout,ModelSelect},
  data(){
    return{
      result:null,
      data:{
        value:null,
        from_masse:'g',
        to_masse:'kg',
      },
      masse:[
        {
          value:'mg',
          text:'Milligramme'
        },
        {
          value:'cg',
          text:'Centigramme'
        },
        {
          value:'dg',
          text:'Decigramme'
        },
        {
          value:'g',
          text:'gramme'
        },
        {
          value:'dag',
          text:'Décagramme'
        },
        {
          value:'hg',
          text:'Hectogramme'
        },
        {
          value:'kg',
          text:'Kilogramme'
        },
      ],
      isError: false
    }
  },
  methods:{
    convert(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.result = evaluate(`${this.data.value} ${this.data.from_masse} to ${this.data.to_masse}`)
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

