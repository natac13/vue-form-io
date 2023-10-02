<script setup lang="ts">
import { Form, Formio } from '@formio/vue'
import { onMounted, ref } from 'vue'
import importedForm from '../../forms/createCa.json'

const schema = ref(importedForm.forms.createCa)

const languages = {
  en: true
}

const language = ref('en')
const formRef = ref<typeof Form | null>(null)
function setLanguage(lang: keyof typeof languages) {
  if (languages[lang]) {
    language.value = lang
    return
  }

  Formio.fetch('https://jbfefjgnnwlszyx.form.io/language/submission?data.selectLanguage=' + lang)
    .then(async (res) => {
      return res.json()
    })
    .then((result) => {
      try {
        console.log('res', result)
        languages[lang] = true
        console.log('here', result)
        const form = document.getElementById('formid')

        // form?.addLanguage(lang, result[0].data.translations)
        Formio.createForm(document.getElementById('formid'), schema.value, {
          language: 'en'
        }).then((form) => {
          console.log('form', form)
          formRef.value = form
          form.addLanguage(lang, result[0].data.translations)
        })
        console.log('there')
        language.value = lang
      } catch (err) {
        console.error(err)
      }
    })
}

onMounted(async () => {
  if (typeof window === 'undefined') return

  window.setLanguage = setLanguage
  setLanguage('mx')
})
</script>

<template>
  <main
    class="bg-green-500 text-white h-full w-full flex flex-col items-center pt-10 justify-start"
  >
    <header>
      <h1 class="text-3xl font-bold">Create a new CA</h1>
    </header>
    <div class="bg-white p-10 rounded-md text-black">
      <Form
        id="formid"
        ref="formRef"
        :language="language"
        @vnode-before-mount="
          (form) => {
            console.log('before mount form', form)
          }
        "
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
