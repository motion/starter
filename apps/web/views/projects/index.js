import React from 'react'
import { view } from '../../decorators'
import { Title, Text, Page, Link } from '../../elements'
import { Hero } from 'models'

@view({
  stores: {
    x: 2,
    // heroes: Hero.byName(),
    // insert(name, color) {
    //   Hero.table.insert({ name, color })
    // },
  },
})
export default class Projects {
  render() {
    return (
      <Page>
        <Title>hi {this.stores.x}</Title>
        <button onClick={() => this.stores.x++}>increment</button>
        {/* {(store.heroes.current || []).map(hero =>
          <hero key={Math.random()}>
            {hero.name || 'none'} {hero.color || 'none'}
          </hero>
        )} */}
        name <input ref={x => this.name = x} />
        color <input ref={x => this.color = x} />
        <button onClick={() => this.stores.insert(this.name.value, this.color.value)}>insert hero</button>
      </Page>
    )
  }
}
