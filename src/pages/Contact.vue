<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <div class="col-6 col-md-6 q-pa-md">
        <q-card flat>
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" width="65%" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" width="90%" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" width="35%" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-skeleton bordered height="400px" square animation="fade" class="q-my-md"/>
        </q-card>

      </div>
      <div class="col-6 col-md-4">
        <q-card flat>
          <q-item>
            <q-item-section>
              <h5>{{ $t("contactForm") }}</h5>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <!-- <q-w-form isSimple :form="formModel"></q-w-form> -->
              <component v-bind:is="formComponent" :form="formModel"/>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue'
import { Form } from 'components/models'

export default defineComponent({
  name: 'ContactPage',
  components: { QWForm: defineAsyncComponent(() => import('../components/QWForm.vue')) },
  setup () {
    const formComponent = 'q-w-form'
    const isStandalone = JSON.parse(process.env.STANDALONE ? process.env.STANDALONE : 'true')
    const hasEmail = true
    const emailTo = isStandalone ? process.env.EMAIL_TO : undefined
    const formModel = ref<Form>({
      isStandalone,
      id: 'contact',
      title: 'Contact',
      hasEmail,
      emailTo,
      inputs: [
        {
          id: 1,
          content: '',
          component: 'q-input',
          isDynamic: true,
          type: 'text',
          label: 'Your name *',
          hint: 'Name and surname'
        },
        {
          id: 2,
          content: '',
          component: 'q-input',
          isDynamic: true,
          type: 'email',
          label: 'Your email *',
          hint: 'name@email.com'
        },
        {
          id: 3,
          content: '',
          component: 'q-input',
          isDynamic: true,
          type: 'textarea',
          label: 'Your message *',
          hint: ''
        },
        {
          id: 4,
          content: false,
          component: 'q-checkbox',
          isDynamic: true,
          type: 'checkbox',
          label: 'I accept the license and terms.',
          hint: ''
        }
      ]
    })
    return { formComponent, formModel }
  }
})
</script>
<i18n src="./lang.json"/>
