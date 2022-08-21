<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <div class="col-10">
        <q-card flat bordered>
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
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>
