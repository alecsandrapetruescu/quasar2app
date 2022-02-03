<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div v-for="input in formModel.inputs" :key="input.id">
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
  <div>
    <q-btn label="Submit" type="submit" color="primary" />
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
  </div>
  </q-form>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useQuasar } from 'quasar'
import { Form } from 'components/models'

export default defineComponent({
  name: 'QWForm',
  props: {
    form: {
      type: Object as PropType<Form>,
      required: true
    }
  },
  setup (props) {
    const $q = useQuasar()
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

    const formModel = computed(() => props.form)
    let emailTo = ''
    if (formModel.value.isStandalone && formModel.value.emailTo) {
      emailTo = formModel.value.emailTo
    }
    return {
      formModel,
      validationRules,
      emailTo,

      onSubmit () {
        console.log(formModel)
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: `Submitted to ${emailTo}`
        })
      },

      onReset () {
        formModel.value.inputs.forEach((input) => {
          input.content = undefined
        })
      }
    }
  }
})
</script>
