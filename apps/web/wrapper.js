// @flow

import { view } from 'helpers'
import React from 'react'
import Router from 'motion-mobx-router'
import Views from './views'
import Home from './views/home'
import Projects from './views/projects'

@view
export default class Wrapper {
  static contextTypes = {
    // This is to override the context type of router from @view
    router: React.PropTypes.any,
  }
  static childContextTypes = {
    router: React.PropTypes.object.isRequired,
  }
  getChildContext() {
    return {
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
