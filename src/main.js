'use strict';

const {create, env} = require ('sanctuary');

const {env: flutureEnv} = require ('fluture-sanctuary-types');

const S = create ({
    checkTypes: process.env.NODE_ENV !== 'production',
    env: env.concat (flutureEnv)
});

const Future = require ('fluture');
const fs = require ('fs');
const {extractText, getLines} = require ('../lib/extract');

const json = JSON.parse(fs.readFileSync('../data/example.json', 'utf8'));


const lines = getLines(json);

console.log(lines);


// const text = extractText(fs.readFileSync('../data/IMG_0171.JPG'));
//
//
//
// text.fork (console.error, data => console.log(JSON.stringify(data)));
