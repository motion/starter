// import { addEvent, setTimeout, setInterval, ref, isClass } from 'motion-class-helpers'
// import { watch, react, observeStreams } from 'motion-mobx-helpers'
import autobind from 'autobind-decorator'
import React from 'react'
import gloss from 'gloss'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import reactMixin from 'sb-react-mixin'
import baseStyles from './baseStyles'

export const glossy = gloss({ baseStyles })

// TODO: injectDecorate() was here

export const view = reactMixin({ decorator: true }, [
  glossy,
  observer,
  autobind,
])

export function store(Store) {
  if (isClass(Store)) {
    mixin(Store.prototype, Helpers)
    return autobind(Store)
  }
  return observable(observeStreams(Store))
}
