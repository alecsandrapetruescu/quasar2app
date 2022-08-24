<template>
  <q-item tag="label" v-ripple>
    <q-item-section avatar>
      <q-checkbox v-model="model"/>
    </q-item-section>
    <q-item-section>
      <q-item-label overline >
        <q-item class="q-pt-md q-pa-xs text-blue"
            clickable
            tag="a"
            target="_blank"
            :href="link"
        >{{ linkText }}
        </q-item>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'QCheckboxLink',
  props: {
    content: {},
    label: {
      type: String
    }
  },
  setup (props) {
    const updatedModel = ref<boolean>(false)
    const model = computed({
      get: () => props.content,
      set: (val) => {
        updatedModel.value = val
      }
    })
    const linkText = computed(() => props.label)
    return {
      model,
      linkText,
      link: 'http://google.com'
    }
  }
})
</script>
