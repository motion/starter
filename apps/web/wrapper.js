// @flow

import { view } from 'helpers'
import Router from 'motion-mobx-router'
import Views from './views'
import Home from './views/home'
import Projects from './views/projects'

@view
export default class Wrapper {
  static childContextTypes = {
    router: undefined,
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
