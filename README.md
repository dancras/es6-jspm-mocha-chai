# Writing mocha tests in ES6 with jspm

 - Write src and test files in ES6
 - jspm dependencies available in tests without `System.import` calls
 - Uses babel

## How does this work?

 - `npm test` will run any tests in "all.js"
 - "test/main.js" is the entry point used to load the test suite with `System.import`
 - Running mocha with `--delay` flag exposes the global `run` function
 - Tests are ready to run after the test suite is imported

## Steps taken

 - `npm install jspm --save-dev`
 - `npm install mocha --save-dev`
 - `./node_modules/.bin/jspm init -p`
 - Choose babel options, generate "config.js"
 - `./node_modules/.bin/jspm install npm:chai --dev`
 - Add `"test": "mocha --delay test/main.js"` to scripts in "package.json"
 - Add `"project/*": "src/*"` to paths in "config.js"
 - Add files
