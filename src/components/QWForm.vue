<template>
  {{ form.title }}
  {{ form }}
  {{ wForm }}
  {{ wForm.title }}
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div v-for="input in wForm.inputs" :key="input.id">
      {{ input.id }} - dynamic component
      <component v-bind:is="input.component" filled lazy-rules
                 v-model="input.content"
                 :type="input.type"
                 :label="input.label"
                 :hint="input.hint"/>
      {{ input.id }} - explicit
      <q-input
            filled
            v-model="input.content"
            :type="input.type"
            :label="input.label"
            :hint="input.hint"
            lazy-rules
          />
    </div>
<!-- :rules="[validationRules[input.rules]]"
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[validationRules.empty]"
          />

          <q-input
            filled
            v-model="email"
            label="Your email *"
            hint="name@email.com"
            type="email"
            lazy-rules
            :rules="[validationRules.email]"
          />
          <q-input
            v-model="text"
            label="Your message *"
            filled
            type="textarea"
          />
-->
  <div>
    <q-btn label="Submit" type="submit" color="primary" />
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
  </div>
  </q-form>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { useQuasar } from 'quasar'
import { Form } from 'components/models'

export default defineComponent({
  name: 'QWForm',
  props: {
    isSimple: {
      type: Boolean,
      required: true,
      default: true
    },
    form: {
      type: Object as PropType<Form>,
      required: true
    }
  },
  setup (props) {
    const $q = useQuasar()
    // const locale = $q.lang.getLocale()
    const name = ref(null)
    const email = ref(null)
    const text = ref(null)

    const validationRules = {
      empty: (content: string) => (content && content.length > 0) || 'Please type something',
      number: (content: number) =>
        (content !== null && content > 0 && content < 100) ||
        'Please type a real number',
      email: (content: string) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          content
        ) || `Please type a valid email! Email ${content}`
    }
    let emailTo = ''

    if (props.isSimple) {
      emailTo = 'test@gmail.com'
    }
    // const wForm = computed(() => toRef(props, 'form'));
    const wForm = computed(() => props.form)
    console.log(wForm)
    const component = 'q-input'
    return {
      component,
      wForm,
      name,
      email,
      text,
      validationRules,
      emailTo,

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: `Submitted to ${emailTo}`
        })
      },

      onReset () {
        console.log(wForm)
        // wForm._value.inputs[0].content = null
        name.value = null
        email.value = null
      }
    }
  }
})
</script>
