<template>
    <p>{{ greeting }}</p>
</template>
<!-- <script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const greeting: Ref<string> = ref('Hello World')

</script> -->
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Greeting',
  data() {
    return {
      greeting: 'Vue and TDD',
    }
  },
})
</script>