import { addEvent, setTimeout, setInterval, ref, isClass } from 'motion-class-helpers'
import { watch, react, observeStreams } from 'motion-mobx-helpers'
import mixin from 'react-mixin'
import autobind from 'autobind-decorator'
import React from 'react'
import gloss from 'gloss'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { provide, injectDecorate } from 'motion-view'
import baseStyles from './baseStyles'

export { inject } from 'motion-view'

export const glossy = gloss({ baseStyles })

const Helpers = {
  addEvent, setInterval, setTimeout, ref, watch, react
}

export function view(View) {
  Object.setPrototypeOf(
    View.prototype,
    React.Component.prototype
  )
  mixin(View.prototype, Helpers)
  // render
  const render = View.prototype.render
  View.prototype.render = function() {
    return render.call(this, this.props, this.state, this.context)
  }
  // order important
  return injectDecorate(autobind(glossy(observer(View))))
}

view.provide = (...args) => View => provide(...args)(view(View))

export function store(Store) {
  if (isClass(Store)) {
    mixin(Store.prototype, Helpers)
    return injectDecorate(autobind(Store))
  }
  return observable(observeStreams(Store))
}