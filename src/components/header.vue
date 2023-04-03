<template>
    <p>{{ greeting }}</p>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const greeting: Ref<string> = ref('Hello World')
</script>