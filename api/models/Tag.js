/**
 * Tag.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
    },
    slug: {
      type: "string",
    },
    posts: {
      collection: "post",
      via: "tags",
    },
    locations: {
      collection: "location",
      via: "tags",
    },
    documents: {
      collection: "document",
      via: "tags",
    },
  },
}
