/* eslint-disable no-console */

import { register } from 'register-service-worker'
import vue from 'vue';
if (true
//     process.env.NODE_ENV === "production" ||
//     process.env.NODE_ENV === "staging"
) {
  return;
  register(`/service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB',
      )
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.')
    },
    updatefound() {
      console.log('New content is downloading.')
    },
    updated() {
      console.log('New content is available; please refresh.')
    },
    offline() {
      console.log('Для просмотра приложения, необходим доступ к интернету')
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    },
  })
} else {
  console.log('SW not enabled in ' + process.env.NODE_ENV)
}
