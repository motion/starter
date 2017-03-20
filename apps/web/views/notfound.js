import React from 'react'
import { view } from '../decorators'

@view
export default class NotFound {
  render() {
    return <div>404</div>
  }
}
