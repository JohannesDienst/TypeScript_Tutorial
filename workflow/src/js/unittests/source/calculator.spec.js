"use strict";
require("mocha");
const chai = require("chai");
const calculator_1 = require('./calculator');
describe('Calculator', () => {
    var subject;
    beforeEach(function () {
        subject = new calculator_1.default();
    });
    describe('#add', () => {
        it('should add two numbers together', () => {
            var result = subject.add(2, 3);
            chai.expect(result).to.equal(5);
        });
    });
});
