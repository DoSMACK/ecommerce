'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
    
    static get table(){
        return 'coupon_order'
    }


    order(){
        return this.belongsTouse('App/Models/Order', 'order_id', 'id')
    }


    coupon(){
        return this.belongsTouse('App/Models/Coupon', 'coupon_id', 'id')
    }

    
}

module.exports = Discount
