/* @flow */

import gloss from 'gloss'
import React from 'react'
import { getView, getStore } from 'motion-view'
import baseStyles from './base-styles'

export const component = getView([], {
  baseStyles,
})
export const view = getView([], {
  baseStyles,
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
})
export const store = getStore([], {})
export const glossy = gloss({ baseStyles })
