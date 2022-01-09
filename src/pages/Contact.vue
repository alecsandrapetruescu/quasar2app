<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <div class="col-6 col-md-6">
        <h5 class="q-pa-md">{{ $t("page") }}</h5>
      </div>
      <div class="col-6 col-md-4">
        <!--  -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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
          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
          <q-input
            v-model="text"
            label="Your message *"
            filled
            type="textarea"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactPage",
  setup() {
    const $q = useQuasar();
    const locale = $q.lang.getLocale();
    const name = ref(null);
    const email = ref(null);
    // const accept = ref(false);

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validationRules = {
      empty: (val) => (val && val.length > 0) || "Please type something",
      number: (val) =>
        (val !== null && val !== "" && val > 0 && val < 100) ||
        "Please type a real number",
      email: (val) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        ) || `Please type a valid email! Email ${val}` + val,
    };
    return {
      locale,
      name,
      email,
      // accept,
      validationRules,

      onSubmit() {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
        // if (accept.value !== true) {
        //   $q.notify({
        //     color: "red-5",
        //     textColor: "white",
        //     icon: "warning",
        //     message: "You need to accept the license and terms first",
        //   });
        // } else {
        //   $q.notify({
        //     color: "green-4",
        //     textColor: "white",
        //     icon: "cloud_done",
        //     message: "Submitted",
        //   });
        // }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
<i18n src="./lang.json"/>