import { compile } from 'kontur'

// exports
export { query } from 'motion-mobx-helpers'
export { bool, int, str, object } from 'kontur'

class BaseModel {
  constructor({ defaultSchema, defaultProps }) {
    this.defaultSchema = defaultSchema
    this.compiledSchema = {
      ...this.defaultSchema,
      ...this.settings,
      ...compile(this.constructor.props),
    }
  }

  get defaultProps() {
    const { defaultProps } = this.constructor
    return typeof defaultProps === 'function'
      ? defaultProps()
      : defaultProps || {}
  }

  get title() {
    return ((this.settings && this.settings.title) || this.constructor.name)
      .toLowerCase()
  }

  get compiledMethods() {
    return {
      ...this.methods,
      delete() {
        return this.collection
          .findOne(this._id)
          .exec()
          .then(doc => doc.remove())
      },
    }
  }

  async connect(db) {
    this.db = db
    this.collection = await db.collection({
      name: this.title,
      schema: this.compiledSchema,
      statics: this.statics,
      methods: this.compiledMethods,
    })

    if (this.hooks) {
      Object.keys(this.hooks).forEach(hook => {
        console.log('adding hook', this.title, hook)
        this.collection[hook](this.hooks[hook])
      })
    }
  }

  timestamps(...props) {
    const defined = props.filter(x => !!this.compiledSchema.properties[x])
    const values = defined.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: new Date().toISOString(),
      }),
      {}
    )
    return values
  }

  // helpers

  create(object) {
    const properties = {
      ...object,
      ...this.defaultProps,
      ...this.timestamps('created_at', 'updated_at'),
    }
    return this.collection.insert(properties)
  }
}

export class Model extends BaseModel {
  constructor() {
    super({
      defaultSchema: {
        primaryPath: '_id',
        version: 0,
        disableKeyCompression: true,
      },
    })
  }
}
