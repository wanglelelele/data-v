<template>
  <UiComponentsSample />
  <ElButton type="primary">button</ElButton>
</template>

<script lang="ts" setup>
// import { defineAsyncComponent } from 'vue'
import { UiComponentsSample, ElButton } from 'ui-components'
// console.log(ElButton)

// const Test = defineAsyncComponent(() => import('ui/TestTree.vue'))
// const Test1 = defineAsyncComponent(async () => {
//   const re = await import('ui/components')
//   return re.default.TestTree
// })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
