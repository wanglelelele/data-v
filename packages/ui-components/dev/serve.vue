<script lang="ts">
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { UiComponentsSample } from '@/entry.esm'
// import 'element-plus/es/components/button/style/css'
// import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'ServeDev',
  components: {
    UiComponentsSample,
  },
})
</script>

<template>
  <div id="app">
    <ui-components-sample />
    <!-- <test /> -->
    <!-- <ElButton type="primary">hi-HI</ElButton> -->
  </div>
</template>
