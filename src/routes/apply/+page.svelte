<script>
  import Header from '$lib/subpages/Header.svelte'

  import { onMount } from 'svelte'
  import js from 'jquery'

  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'
  import { getContext } from 'svelte'

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  let logo = getContext('logo')

  onMount(() => {
    window.jQuery = js

    jQuery = window.jQuery
    main()

    function main() {
      let idOnPage = 0
      jQuery('.et-widget').each(function (index, value) {
        idOnPage++
        let widgetType = +getHtmlPropertyETWidget(this, 'widget-type', 'data-widget-type')
        let widgetId = +getHtmlPropertyETWidget(this, 'widget-id', 'data-widget-id')
        let formId = getHtmlPropertyETWidget(this, 'form-id', 'data-form-id')
        let widgetPropertiesArr = 'data-widget-event-type,data-widget-campus-code,data-widget-event-id'.split(',')
        let parameters = {}
        // scan for all of the defined WidgetDataProperties in the .et-widget div.
        widgetPropertiesArr.forEach((key) => {
          let value = getHtmlPropertyETWidget(this, key)
          if (value) {
            parameters[key] = value
          }
        })
        const isIosMobile = navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1
        const isIosBinary = isIosMobile ? 1 : 0
        let url = 'https://app.enquirytracker.net' + '/api/noAuth/widget/getWidget/fb14d4ba3bd143bdaebd32ebe8a235c0/' + widgetType + '/' + widgetId + '/' + formId + '/' + isIosBinary + '/' + idOnPage + '?dataAttributes=' + encodeURIComponent(JSON.stringify(parameters))
        let d = jQuery(this)
        jQuery.ajax({
          url: url,
          method: 'GET',
          success: function (o) {
            d.html(o)
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown)
          },
        })
      })
    }

    function getHtmlPropertyETWidget(self, ...propertyNames) {
      let temp = propertyNames.reduce((prev, current) => {
        return prev ? prev : jQuery(self).attr(current)
      }, '')
      return temp
    }
  })
</script>

<svelte:head>
  <title>Apply</title>
  <meta name="description" content="Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel." />
  <meta property="og:title" content="Craighead Diocesan School - Apply" />
  <meta property="og:url" content="https://craighead.school.nz/apply" />
  <meta property="og:description" content="Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<Header title="Apply" subtitle="Use our online form to apply to join our wonderful community." />

<div class="et-widget" data-widget-type="2" data-widget-id="4" data-form-id="zvRFreLaMn2HfqIO2IjN" />

<style>
  div {
    margin: 3em 0;
  }
</style>
