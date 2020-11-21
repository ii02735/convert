<template>
  <section class="mb-5" >
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
          <div class="col-sm text-left p-3 p-sm-3"><button type="button" @click="sha" class="btn btn-primary btn-sm mr-5">Crypter en sha256</button></div>
          <div class="col-sm text-left p-3 p-sm-3"><button type="button" @click="md5" class="btn btn-primary btn-sm mr-5">Crypter en md5</button></div>
          <!--<div class="col-sm text-left p-3 p-sm-3"><button type="button" @click="hmacSha" class="btn btn-primary btn-sm mr-5">Crypter en hmacSHA512</button></div>
          <div class="col-sm text-left p-3 p-sm-3"><button type="button" @click="base" class="btn btn-primary btn-sm mr-5">Crypter en Base64</button></div>-->
          <div class="col-sm text-left p-3 p-sm-3"><button type="button" @click="aes" class="btn btn-primary btn-sm mr-5">Crypter en AES</button></div>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script>
import Layout from "@/components/Utils/Layout";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import md5 from 'crypto-js/md5';
import AES from 'crypto-js/aes';
export default {
  name: 'Hash',
  components: {Layout},
  data(){
    return{
     text:'Saisissez votre texte',
      isError:false,
    }
  },
  methods:{
    sha(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = sha256(this.text);
          this.isError = false;
        }
        else this.isError= true;
      });
    },
    hmacSha(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = hmacSHA512(this.text,"Secret Passphrase");
          console.log(this.text)
          this.isError = false;
        }
        else this.isError = true;
      });
    },
    base(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = Base64.parse(this.text);
          this.isError = false;
        }
        else this.isError = true;
      });
    },
    md5(){
      this.$validator.validateAll().then(result => {
        if (result) {
          this.text = md5(this.text);
          this.isError = false;
        }
        else this.isError = true;
      });
    },
  aes(){
        this.$validator.validateAll().then(result => {
          if (result) {
            this.text = AES.encrypt(this.text,"secret KEY").toString();
            this.isError = false;
          }
          else this.isError = true;
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


