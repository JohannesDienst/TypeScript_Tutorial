"use strict";

import Calculator from './unittests/source/calculator';

$( document ).ready(function() {
  $("#greeting").text("Hello World!");

  let calc = new Calculator();
  $("#result").text(calc.add(21, 6));
});
