<template>
  <section>
    <article class="layout container">
        <slot></slot>
    </article>
  </section>
</template>
<script>
export default {
  name:"Layout"
}
</script>
<style>
.layout {
  font-family: serif;
  border-radius: 12px;
  border-color: white;
  background-color: white;
  box-shadow: 0px 0px 10px #555;
  min-height: 25rem !important;
}

@media (min-width: 578px) {
  .layout{
    margin: 0;
    position: absolute;
    top: 60%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
}
</style>
