<script setup lang="ts">
import {Demo} from './index'
import {ref} from 'vue'

const demo = ref(new Demo())
console.log(demo)
console.log(demo.value.getRequestBody())
</script>

<template>
  <div>
    <h1>...</h1>
  </div>
</template>

