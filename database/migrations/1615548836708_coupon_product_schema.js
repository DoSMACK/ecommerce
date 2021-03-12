'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponProductSchema extends Schema {
  up () {
    this.create('coupon_product', (table) => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()
      table
        .foregein('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('cascade')
      table
        .foregein('product_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('coupon_product')
  }
}

module.exports = CouponProductSchema
