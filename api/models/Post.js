/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: {
      type: "string",
    },
    content: {
      type: "text",
    },
    short: {
      type: "text",
    },
    draft: {
      type: "boolean",
    },
    tags: {
      collection: "tag",
      via: "posts",
      dominant: true,
    },
    locations: {
      collection: "location",
      via: "posts",
      dominant: true,
    },
    documents: {
      collection: "document",
      via: "posts",
      dominant: true,
    },
    cities: {
      collection: "city",
      via: "posts",
      dominant: true,
    },
  },
}
