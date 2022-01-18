<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
import { useQuasar, useMeta } from "quasar";
import { defineComponent } from 'vue';


const metaData = {
  build: (pageMetaData) => { 
	  console.log(pageMetaData);
	  return  {
		  // sets document title
		  title: pageMetaData.title,
		  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
		  titleTemplate: title => {
			if (pageMetaData.isHomePage) return pageMetaData.domain		  
		  	return `${title} - ${pageMetaData.domain}`
		  },

		  // meta tags
		  meta: {
		    description: { name: 'description', content: pageMetaData.description },
		    keywords: { name: 'keywords', content: 'Quasar website' },
		    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
		    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
		    ogTitle:  {
		      property: 'og:title',
		      // optional; similar to titleTemplate, but allows templating with other meta properties
		      template (ogTitle) {
			return `${ogTitle} - My Website`
		      }
		    }
		  },

		  // CSS tags
		  link: {
		    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
		  },

		  // JS tags
		  script: {
		    ldJson: {
		      type: 'application/ld+json',
		      innerHTML: `{ "@context": "http://schema.org" }`
		    }
		  },

		  // <html> attributes
		  htmlAttr: {
		    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
		    empty: undefined // generates <html empty>
		  },

		  // <body> attributes
		  bodyAttr: {
		    'action-scope': 'xyz', // generates <body action-scope="xyz">
		    empty: undefined // generates <body empty>
		  },

		  // <noscript> tags
		  noscript: {
		    default: 'This is content for browsers with no JS (or disabled JS)'
		  }
		}
  }
}
	
export default defineComponent({
  name: 'PageIndex',
  setup() { 
	
	const pageMeta = {
		isHomePage: true,	
		domain: "DOMAIN",
		title: "Index",
		description: "My custom description"
	}
    // needs to be called in setup()
    useMeta(metaData.build(pageMeta))
  }
})
</script>
