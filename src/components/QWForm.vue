<template>
  <q-form ref="qform" class="q-gutter-md" @reset="onReset" @submit="onSubmit">
    <div v-for="input in formModel.inputs" :key="input.id">
      <component v-bind:is="input.component"
                 v-show="input.isDynamic"
                 v-model="input.content"
                 :hint="input.hint"
                 :label="input.label"
                 :type="input.type"
                 filled
                 lazy-rules
      />
      <q-input v-show="!input.isDynamic && input.component === inputComponents.Input"
               v-model="input.content"
               :hint="input.hint"
               :label="input.label"
               :type="input.type"
               filled
               lazy-rules
      ></q-input>
      <q-checkbox v-show="!input.isDynamic && input.component === inputComponents.Checkbox"
                  v-model="input.content"></q-checkbox>
    </div>
    <div>
      <q-btn label="Submit" type="submit" color="primary"/>
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
    </div>
  </q-form>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useQuasar } from 'quasar'
import { Form, InputComponents } from 'components/models'

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
    const inputComponents = InputComponents
    const validationRules = {
      empty: (content: string) => (content && content.length > 2) || 'Please type something',
      number: (content: number) => (content !== null && content > 0 && content < 100) ||
          'Please type a real number',
      email: (content: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(content) || `Please type a valid email! Email ${content}`
    }

    const formModel = computed(() => props.form)
    let emailTo = ''
    if (formModel.value.isStandalone && formModel.value.emailTo) {
      emailTo = formModel.value.emailTo
    }
    return {
      inputComponents,
      formModel,
      validationRules,
      emailTo,
      onSubmit (evt: Event | SubmitEvent) {
        console.log('onSubmit')
        const anyEmptyInputs = formModel.value.inputs.find((input) => input.content === '')
        if (anyEmptyInputs) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: `You need to fill in '${anyEmptyInputs.label}'. Hint: ${anyEmptyInputs.hint}`
          })
        } else {
          const terms = formModel.value.inputs.find((input) => input.type === 'checkbox')
          if (terms && terms.content !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          } else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: `Submitted to ${emailTo}`
            })
          }
        }
      },
      onReset () {
        console.log('onReset')
        formModel.value.inputs.forEach((input) => {
          input.content = undefined
        })
      }
    }
  }
})
</script>
