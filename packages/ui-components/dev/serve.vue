<script lang="ts">
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { UiComponentsSample } from '@/entry.esm'
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
  </div>
</template>
