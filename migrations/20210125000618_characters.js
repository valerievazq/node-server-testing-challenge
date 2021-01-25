exports.up = function(knex) {
    return knex.schema.createTable('Characters',(table)=>{
      table.increments('id'),
      table.string('name').unique().index()
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Characters')
  }; 