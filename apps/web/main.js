// @flow
import React from 'react'
import view, { Component } from 'motion-test-view'

class Store {
  x = 1
}

@view
export default class Main extends Component {
  componentDidMount() {
    this.addEvent(window, 'mousemove', console.log)
  }

  render(a) {
    return (
      <h1>Hello {this.test}</h1>
    )
  }

  static style = {
    h1: {
      background: 'blue'
    }
  }
}