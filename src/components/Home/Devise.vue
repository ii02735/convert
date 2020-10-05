<template>
   <Layout>
     <div class="container">
       <div class="row">
         <div class="col-sm pt-5 p-3 p-sm-3">
           <select class="form-control">
             <option>Default select</option>
           </select>
         </div>
         <div class="col-sm p-3 p-sm-3">
           <input class="form-control" value="to" type="text" readonly>
         </div>
         <div class="col-sm p-3 p-sm-3">
           <select class="form-control">
             <option>Default select</option>
           </select>
         </div>
         <div class="col-sm p-3 p-sm-3">
           <input class="form-control" v-model="result" type="text" placeholder="Your result..." readonly>
         </div>
         <div class="w-100 mb-5"></div>
         <div class="col-sm text-lg-center text-md-center text-sm-left text-left p-3 p-sm-3">
           <button type="button" class="btn btn-primary btn-lg">Convert</button>
         </div>
       </div>
     </div>
   </Layout>
</template>

<script>
// @ is an alias to /src

import Layout from "@/components/Utils/Layout";
export default {
  name: 'Devise',
  components: {Layout},
  data(){
    return{
      result:''
    }
  }
}
</script>
<style scoped>
/*.row{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
}*/
@media (min-width: 578px) {
  .row{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
  }
}
.btn-primary{
  background-color: var(--app-primary-color);
}
.btn-primary:hover{
  background-color: var(--app-secondary-color);
}

</style>
