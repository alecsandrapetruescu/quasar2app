<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <q-card flat bordered class="col-10">
        <q-item>
          <q-item-section avatar>
            <q-skeleton bordered type="QAvatar" animation="fade" class="bg-blue-1"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton bordered type="text" animation="fade"/>
            </q-item-label>
            <q-item-label caption>
              <q-skeleton bordered type="text" animation="fade"/>
            </q-item-label>
            <q-item-label caption>
              <q-skeleton bordered type="text" animation="fade"/>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-skeleton bordered height="600px" square animation="fade"/>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { PageMeta } from '../components/models'
import { defineComponent, ref } from 'vue'
import metaData from '../components/MetaBuilder'
import { useMeta } from 'quasar'

export default defineComponent({
  name: 'QuestionPage',
  components: { },
  setup () {
    const pageMeta = ref<PageMeta>({
      isHomePage: false,
      domain: 'DOMAIN',
      title: 'Questions',
      description: 'My custom description'
    })
    useMeta(metaData.build(pageMeta))
    return { }
  }
})
</script>
