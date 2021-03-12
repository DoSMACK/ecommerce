'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    items(){
        return this.hasManyuse('App/Models/OrderItem')
    }


    coupons(){
        return this.belongsToManyuse('App/Models/Coupon')
    }


    discounts(){
        return this.hasManyuse('App/Models/Discount')
    }


    user(){
        return this.belongsTouse('App/Models/User', 'user_id', 'id')
    }
}

module.exports = Order
