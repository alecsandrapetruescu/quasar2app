<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-white">
        <q-toolbar-title>
          <q-btn flat label="" icon="home" />
        </q-toolbar-title>

        <q-tabs
          v-model="tab"
          active-color="white"
          shrink
          mobile-arrows
          inline-label
        >
          <q-route-tab name="home" label="Domain" to="/" />
          <q-separator dark vertical inset />
          <q-route-tab name="about" label="About" to="/about" />
          <q-route-tab name="question" label="Question" to="/question" />
          <q-route-tab name="contact" label="Contact" to="/contact" />
          <q-separator dark vertical inset />
          <q-route-tab name="admin" icon="settings" to="/admin" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',

  components: {},

  setup () {
    return {
      tab: ref('home')
    }
  }
})
</script>
