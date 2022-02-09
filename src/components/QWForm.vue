<template>
  <q-form class="q-gutter-md" @reset="onReset" @submit="onSubmit">
    <div v-for="input in formModel.inputs" :key="input.id">
      <component v-bind:is="input.component" v-show="input.isDynamic" v-model="input.content" :hint="input.hint"
                 :label="input.label"
                 :type="input.type"
                 filled
                 lazy-rules/>
      <q-input v-show="!input.isDynamic"
               v-model="input.content"
               :hint="input.hint"
               :label="input.label"
               :type="input.type"
               filled
               lazy-rules
      />
    </div>
    <div>
      <q-btn color="primary" label="Submit" type="submit"/>
      <q-btn class="q-ml-sm" color="primary" flat label="Reset" type="reset"/>
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
