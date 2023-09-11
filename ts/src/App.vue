<script setup lang="ts">
import {Demo} from './index'
import {reactive} from 'vue'

const demo = reactive(new Demo())
console.log(demo)
console.log(demo.getRequestBody())
</script>

<template>
  <div>
    <h1>...</h1>
  </div>
</template>

