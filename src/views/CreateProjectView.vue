<script setup lang="ts">
import formJson from '../../forms/createProject.json'
import { Form, Formio } from '@formio/vue'
</script>

<template>
  <div class="bg-orange-300 w-full h-full flex items-center justify-center">
    <!-- card -->
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <Form :form="formJson" />
    </div>
  </div>
</template>
