import React from 'react'
import { render } from 'react-dom'
import App from './stores/app'
import Router from './stores/router'

window.React = React

App.connect()
  .then(() => {
    // inject App
    window.App = App

    if (process.env.NODE_ENV === 'development') {
      module.hot.accept()
    }

    // render
    const Views = require('./views').default
    render(
      <Views key={Math.random()} />,
      document.querySelector('#app')
    )
  })
