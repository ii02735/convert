<template>
  <sectioncl>
    <article class="layout container">
        <slot></slot>
    </article>
  </sectioncl>
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
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
}
</style>
