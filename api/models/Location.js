/**
 * Location.js
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
    lng: {
      type: "string",
    },
    lat: {
      type: "string",
    },
    documents: {
      collection: "document",
      via: "locations",
      dominant: true,
    },
    tags: {
      collection: "tag",
      via: "locations",
      dominant: true,
    },
    posts: {
      collection: "post",
      via: "locations",
    },
    city: {
      model: "city",
    },
  },
}
