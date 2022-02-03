<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <div class="col-6 col-md-6">
        <h5 class="q-pa-md">{{ $t("page") }}</h5>

      </div>
      <div class="col-6 col-md-4">
        <!-- <q-w-form isSimple :form="form"></q-w-form> -->
        <component v-bind:is="formComponent" :form="formModel"/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import QWForm from 'components/QWForm.vue'
import { defineComponent, ref } from 'vue'
import { Form } from 'components/models'

export default defineComponent({
  name: 'ContactPage',
  components: { QWForm },
  setup () {
    const formComponent = 'q-w-form'
    const formModel = ref<Form>({
      standalone: JSON.parse(process.env.STANDALONE ? process.env.STANDALONE : 'true'),
      title: 'Contact',
      inputs: [
        {
          id: 1,
          content: '',
          type: 'text',
          label: 'Your name *',
          hint: 'Name and surname'
        },
        {
          id: 2,
          content: '',
          type: 'email',
          label: 'Your email *',
          hint: 'name@email.com'
        },
        {
          id: 3,
          content: '',
          type: 'textarea',
          label: 'Your message *',
          hint: ''
        }
      ]
    })
    return { formComponent, formModel }
  }
})
</script>
<i18n src="./lang.json"/>
