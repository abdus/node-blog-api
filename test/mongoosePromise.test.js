const mocha = require('mocha');
const expect = require('chai').expect;
const schema = require('../database/models/userSchema')

describe('Checks if Mongoose using global promise', () => {
    it('Mongoose using global promise', () => {
        const save = new schema().save()
        expect(save).to.a.instanceof(global.Promise);
    })
})