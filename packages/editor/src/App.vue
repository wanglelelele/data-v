<template>
  <UiComponentsSample />
  <ElButton type="primary" @click="open">
    I am from ui-components/lib-components, click me
  </ElButton>
  <Test />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { UiComponentsSample, ElButton, ElMessage } from 'ui-components'

const Test = defineAsyncComponent(() => import('ui/TestTree.vue'))
const open = () => {
  ElMessage('this is a message.')
}
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
