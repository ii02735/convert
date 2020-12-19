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
</style>
