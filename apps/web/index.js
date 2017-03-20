import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'motion-mobx-router'

import App from './stores/app'
import { component } from './decorators'

import Views from './views'
import Home from './views/home'
import Projects from './views/projects'

const app = new App()

@component
class Root {
  static childContextTypes = {
    app: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  }
  getChildContext() {
    return {
      app,
      router: new Router({
        routes: {
          '/': Home,
          'projects(/:id)(/tab/:tab)': Projects,
        },
      }),
    }
  }
  render() {
    return <Views />
  }
}

app.connect()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      module.hot.accept()
    }
    ReactDOM.render(
      <Root />,
      document.querySelector('#app'),
    )
  })
  .catch(function(error) {
    console.error('Error caught during App connect', error)
  })
