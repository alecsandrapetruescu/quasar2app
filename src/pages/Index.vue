<template>
  <q-page class="row items-center justify-evenly"></q-page>
</template>

<script lang="ts">
import { PageMeta } from 'components/models'
import { defineComponent, ref } from 'vue'
import metaData from '../components/MetaBuilder'
import { useMeta } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  components: { },
  setup () {
    const pageMeta = ref<PageMeta>({
      isHomePage: true,
      domain: 'DOMAIN',
      title: 'Index',
      description: 'My custom description'
    })
    useMeta(metaData.build(pageMeta))
    return { }
  }
})
</script>
