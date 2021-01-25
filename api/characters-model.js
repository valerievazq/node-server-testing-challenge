const db = require('../data/config');

module.exports = {
  find,
  insert,
  remove,
};

function find() {
  return db('Characters');
}

function insert(newCharacter) {
  return db('Characters').insert(newCharacter);
}

function remove(id) {
  return db('bestCharacters').where({ id }).delete();
} 