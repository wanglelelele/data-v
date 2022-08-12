<template>
  <UiComponentsSample />
  <ElButton type="primary" @click="open">
    button from ui-components by lerna, click me
  </ElButton>
  <UIButton type="primary">button from ui by MF</UIButton>
  <Test />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { UiComponentsSample, ElMessage, ElButton } from 'ui-components'

const Test = defineAsyncComponent(() => import('ui/TestTree.vue'))
const open = () => {
  ElMessage('this is a message.')
}
const UIButton = defineAsyncComponent(async () => {
  const re = await import('ui/components')
  return re.default.ElButton
})
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
