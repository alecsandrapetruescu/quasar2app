<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">

        <q-card flat class="col-6 col-md-6 q-pa-md">
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

        <q-card flat class="col-6 col-md-4">
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

  </q-page>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue'
import { Form, PageMeta } from 'components/models'
import { useMeta } from 'quasar'
import metaData from 'components/MetaBuilder'
import { applicationInfo } from 'boot/applicationInfo'

export default defineComponent({
  name: 'ContactPage',
  components: { QWForm: defineAsyncComponent(() => import('../components/QWForm.vue')) },
  setup () {
    console.log(applicationInfo)
    const formComponent = 'q-w-form'
    const isStandalone = applicationInfo.isStandalone
    const hasEmail = true
    const emailTo = applicationInfo.emailTo
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
          component: 'q-checkbox-link',
          isDynamic: true,
          type: 'checkbox',
          label: 'I accept the license and terms.',
          hint: ''
        }
      ]
    })

    const pageMeta = ref<PageMeta>({
      isHomePage: false,
      domain: 'DOMAIN',
      title: 'Contact',
      description: 'My custom description'
    })
    useMeta(metaData.build(pageMeta))
    return { formComponent, formModel }
  }
})
</script>
<i18n src="./lang.json"/>
