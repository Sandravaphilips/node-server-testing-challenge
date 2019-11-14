const db = require('../data/dbConfig');

module.exports = {
    find,
    add,
    findById,
    update,
    remove
};

function find() {
    return db('users')
}

function add(user) {
    return db('users').insert(user)
        .then(([id]) => findById(id))
}

function findById(id) {
    return db('users').where({id})
}

function update(id, changes) {
    return db('users').where({id})
        .update(changes)
            .then(() => findById(id))
}

function remove(id) {
    return db('users').where({id}).
        del();
}