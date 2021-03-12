'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up () {
    this.table('user', (table) => {
      // alter table
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelele('cascade')
    })
  }

  down () {
    this.table('user_image_fks', (table) => {
      // reverse alternations
      table.dropForeing('image_id')
    })
  }
}

module.exports = UserImageFkSchema
