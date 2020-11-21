<template>
    <div>
        <footer class="page-footer font-small pt-2 container-fluid" id="footers">
            <div id="fcontainer" class="container text-center mt-2">
                <span>Copyright &copy; {{new Date().getFullYear()}} MAREGA Oumar. Tous droits réservés!</span>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
      name:"Footer"
    };
</script>
<style scoped>
    #footers {
        background-color: #232935;
        min-height: 50px;
    }

    #fcontainer {
        font-family: serif;
        min-height: 50px;
        color: white;
    }

    #fh1 span {
        border-style: solid;
        border-color: #24c8a6;
    }

    #fh6 span {
        border-bottom-style: solid;
        border-bottom-color: #24c8a6;
    }


    #fpcontact span {
        color: white;
        font-size: 15px;
        margin-left: 15px;
        position: absolute;
    }

    .inputMail input[type=email] {}

    .inputMail i {
        color: gray;
    }

    .inputMail input[type=email]:focus+i {
        color: darkcyan;
    }



    #fdivlink a {
        width: 167px;
        background-color: #455a64;
        border-radius: 13px;
        height: 47px;
    }

    #flink span {
        font-weight: bold;
        font-size: 14px;
        padding-bottom: 15px;
    }

    .link a {
        color: white;
        font-weight: normal;
    }
</style>
