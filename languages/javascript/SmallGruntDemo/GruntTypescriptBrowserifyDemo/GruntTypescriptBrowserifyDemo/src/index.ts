/// <reference path="typings/jquery.d.ts" />
import Foo = require('./foo');
import $ = require('jquery');



$(document).ready(function () {
    var foo = new Foo();
    var greeting = foo.greet();
    console.log(greeting);

    alert('Greet was AAAAAA ' + greeting);
});



