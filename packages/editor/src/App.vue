<template>
  <UiComponentsSample />
  <ElButton type="primary">button-1</ElButton>
  <IMessage />
  <Test />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { UiComponentsSample, ElButton, IMessage } from 'ui-components'

const Test = defineAsyncComponent(() => import('ui/TestTree.vue'))
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
