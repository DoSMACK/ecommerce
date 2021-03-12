'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    /**
     * Relacionamento das categorias das imagens e destaques
     */
    image(){
        return this.belongsTo('App/Models/Image')
    }
    /**
     * Relacionar a categoria ao produto
     */
    products(){
        return this.belongsToMany('App/Models/Product')
        
    }
}

module.exports = Category
