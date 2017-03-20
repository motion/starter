import React from 'react'
import { view } from '../decorators'

@view
export default class Sidebar {
  render() {
    return (
      <sidebar>
        <section>
          <a>Test thing</a>
          <a>Test thing</a>
          <a>Test thing</a>
          <a>Test thing</a>
          <a>Test thing</a>
        </section>
      </sidebar>
    )
  }

  static style = {
    sidebar: {
      height: '100%',
      width: 160,
      borderRight: [1, '#eee'],
    },
  }
}
