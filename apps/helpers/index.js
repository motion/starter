// import { addEvent, setTimeout, setInterval, ref, isClass } from 'motion-class-helpers'
// import { watch, react, observeStreams } from 'motion-mobx-helpers'
import autobind from 'autobind-decorator'
// import React from 'react'
import gloss from 'gloss'
import { observer } from 'mobx-react'
// import { observable } from 'mobx'
import reactMixin from 'sb-react-mixin'
import baseStyles from './baseStyles'

export const glossy = gloss({ baseStyles })

// TODO: injectDecorate() was here

export function getComponent(mixins: Array<any> = []): Function {
  return reactMixin({ decorator: true }, [
    glossy,
    observer,
    autobind,
  ].concat(mixins))
}

export const view = getComponent([function(component) {
  component.provide = function() {
    console.log('view provide was called')
  }
}])
export const store = getComponent([function(component) {
  component.provide = function() {
    console.log('store provide was called')
  }
}])
