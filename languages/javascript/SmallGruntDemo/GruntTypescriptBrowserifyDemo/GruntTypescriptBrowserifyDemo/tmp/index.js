var Foo = require('./foo');
var $ = require('jquery');
$(document).ready(function () {
    var foo = new Foo();
    var greeting = foo.greet();
    console.log(greeting);
    alert('Greet was AAAAAA ' + greeting);
});
//# sourceMappingURL=index.js.map