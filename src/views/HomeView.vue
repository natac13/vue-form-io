<script setup lang="ts">
import { Form, Formio } from '@formio/vue'
import { ref } from 'vue'
import importedForm from '../../forms/createCa.json'

const schema = ref(importedForm.forms.createCa)
</script>

<template>
  <main
    class="w-screen h-screen bg-green-500 text-white flex flex-col items-center pt-10 justify-start"
  >
    <header>
      <h1 class="text-3xl font-bold">Create a new CA</h1>
    </header>
    <div class="bg-white p-10 rounded-md text-black">
      <Form
        @submit="
          (submission) => {
            console.log('submit: ', submission)
          }
        "
        src="https://jbfefjgnnwlszyx.form.io/createca"
      />
    </div>
  </main>
</template>
