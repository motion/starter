// import { addEvent, setTimeout, setInterval, ref, isClass } from 'motion-class-helpers'
// import { watch, react, observeStreams } from 'motion-mobx-helpers'
import autobind from 'autobind-decorator'
// import React from 'react'
import gloss from 'gloss'
import { observer } from 'mobx-react'
// import { observable } from 'mobx'
import reactMixin from 'sb-react-mixin'
import React from 'react'
import baseStyles from './baseStyles'

export const glossy = gloss({ baseStyles })

export function viewAttach(component: Function, stores: Object): Function {
  component.prototype.stores = null
  return reactMixin({ decorator: false, react: true },component, [
    glossy,
    observer,
    autobind,
    {
      componentDidMount() {
        this.stores = {}
        Object.keys(stores).forEach(name => {
          this.stores[name] = new stores[name](this.props)
        })
      },
      contextTypes: {
        router: React.PropTypes.func.isRequired,
      },
    },
  ])
}
export function view(componentOrOptions: Function | Object = {}): Function {
  if (typeof componentOrOptions === 'object') {
    return function(component) {
      return viewAttach(component, componentOrOptions)
    }
  }
  return viewAttach(componentOrOptions, {})
}

// TODO: Previous @store had observeStreams
export const store = reactMixin({ decorator: true, react: false }, [
  glossy,
  observer,
  autobind,
])
