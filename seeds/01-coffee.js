const coffees = require('../coffees');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      // Inserts seed entries
      return knex('coffee').insert(coffees);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE coffee_id_seq RESTART WITH 4;");
    });
};