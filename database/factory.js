'use strict'

const Factory = require('@adonisjs/lucid/src/Factory')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

Factory.blueprintuse('App/Models/Users', (faker) => { 
    return {
        name: faker.first(),
        surname: faker.last(),
        email: faker.email({domain: 'fsocietybrasil.org'}),
        password: 'secret'
    } 
})

Factory.blueprintuse('App/Models/', (faker) => { 
    return {
        title: faker.country({full: true}),
        description: faker.sentence()
    } 
})

Faker.blueprintuse('App/Models/Product', faker => {
    return{
        name: faker.animal(),
        discription: faker.sentence(),
        price: faker.floating({min: 0, max: 1000, fixed:2})
    }
})