import { boot } from 'quasar/wrappers'

const applicationInfo = {
  isStandalone: !!process.env.STANDALONE,
  emailTo: process.env.STANDALONE ? process.env.EMAIL_TO : undefined,
  apiURL: process.env.STANDALONE ? undefined : process.env.API_URL,
  mode: process.env.NODE_ENV
}

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$applicationInfo = applicationInfo
  // ^ ^ ^ this will allow you to use this.$applicationInfo (for Vue Options API form)
  //       so you won't necessarily have to import in each vue file
})

export { applicationInfo }
