"use strict";
const calculator_1 = require('./unittests/source/calculator');
$(document).ready(function () {
    $("#greeting").text("Hello World!");
    let calc = new calculator_1.default();
    $("#result").text(calc.add(21, 6));
});
