'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    image(){
        return this.belongsTo('App/Models/Image')
    }
    /**
     * Relacionamento de produto de imagens
     * galeria de imagens
     */
    images(){
        return this.belongsToMany('App/Models/Image')
    }
    /**
     * Reclacionamento entre produtos e categorias
     */
    categories(){
        return this.belongsToMany('App/Models/Category')
    }
    /**
     * Relacionamento de coupoens e produtos
     */
    coupons(){
        return this.belongsToManyuse('App/Models/Coupon')
    }
}

module.exports = Product
