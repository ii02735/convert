<template>
  <section class="mb-5" >
    <h3 class="mb-5">Convertisseur de px à rem </h3>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm pt-5 p-3 p-sm-3">
            <h5>Calcul basé sur un font-size de : <input class="col-1 base-font" v-model="data.base_font"  name="base_font" v-validate="'required|numeric|min_value:1'" placeholder="Ex: 101" type="text"></h5>
            <div v-if="isError" class=" text-center mt-3 alert alert-danger" role="alert">
              {{errors.first('base_font')}}
            </div>
          </div>
          <div class="w-100" ></div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" v-model="data.value"  name="value" v-validate="'required|numeric'" placeholder="Ex: 100" type="text">
            <div v-if="isError" class=" mt-3 alert alert-danger" role="alert">
              {{errors.first('value')}}
            </div>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="resolution"
                          v-model="data.from_resolution"
                          class="form pt-3">
            </model-select>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <input class="form-control form" value="to" type="text" readonly>
          </div>
          <div class="col-sm p-3 p-sm-3">
            <model-select :options="resolution"
                          v-model="data.to_resolution"
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
import {ModelSelect} from "vue-search-select";
export default {
  name: 'Distance',
  components: {Layout,ModelSelect},
  data(){
    return{
      result:null,
      data:{
        value:null,
        from_resolution:'px',
        to_resolution:'rem',
        base_font:16,
      },
      resolution:[
        {
          value:'px',
          text:'PX'
        },
        {
          value:'rem',
          text:'REM'
        },
      ],
      isError: false,
      isErrorBase: false
    }
  },
  methods:{
    convert(){
      this.$validator.validateAll().then(result => {
        if (result) {
          if(this.data.from_resolution === 'px')
            this.result = this.px_to_rem();
          if(this.data.from_resolution === 'rem')
            this.result = this.rem_to_px();
        }
        else
        {
          this.isError = true;
          this.isErrorBase = true
        }
      });
    },
    px_to_rem(){
      return (this.data.value/this.data.base_font).toFixed(3)
    },
    rem_to_px(){
      return (this.data.value*this.data.base_font).toFixed(3)
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
.base-font{
  width: 3.5rem;
  font-size: 1rem;
}
</style>


