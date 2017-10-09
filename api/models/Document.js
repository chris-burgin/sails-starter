/**
 * Document.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
    },
    content: {
      type: "text",
    },
    url: {
      type: "string",
    },
    type: {
      type: "string", // can be: image, text
    },
    locations: {
      collection: "location",
      via: "documents",
    },
    posts: {
      collection: "post",
      via: "documents",
    },
    tags: {
      collection: "tag",
      via: "documents",
      dominant: true,
    },
    cities: {
      collection: "city",
      via: "documents",
      dominant: true,
    },
  },
}
