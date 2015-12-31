/* globals console, require, run */
var System = require('jspm');

System.import('test/all')
    .then(function(m) {
        run();
    })
    .catch(function(e) {
        console.error(e);
        run();
    });
