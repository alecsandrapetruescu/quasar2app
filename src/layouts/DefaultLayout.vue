<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <div class="row no-wrap">
        <q-toolbar class="text-white offset-1 col-9">
          <q-toolbar-title>
            <q-tabs
                v-model="tab"
                active-color="white"
                shrink
                mobile-arrows
                inline-label
                align="right"
            >
              <q-route-tab name="home" label="Domain" to="/" />
              <q-separator dark vertical inset />
              <q-route-tab name="about" label="About" to="/about" />
              <q-route-tab name="question" label="Question" to="/question" />
              <q-route-tab name="contact" label="Contact" to="/contact" />
              <q-separator v-if="!isStandalone" dark vertical inset />
              <q-route-tab v-if="!isStandalone" name="admin" label="Sign in" to="/admin" />
            </q-tabs>
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { applicationInfo } from 'boot/applicationInfo'

export default defineComponent({
  name: 'DefaultLayout',

  components: {},

  setup () {
    return {
      tab: ref('home'),
      isStandalone: applicationInfo.isStandalone
    }
  }
})
</script>
