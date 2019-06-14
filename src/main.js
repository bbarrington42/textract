'use strict';

const {create, env} = require ('sanctuary');

const {env: flutureEnv} = require ('fluture-sanctuary-types');

const S = create ({
    checkTypes: process.env.NODE_ENV !== 'production',
    env: env.concat (flutureEnv)
});

const Future = require ('fluture');
const fs = require ('fs');
const {extractText} = require ('../lib/extract');


const text = extractText(fs.readFileSync('../data/IMG_0171.JPG'));



text.fork (console.error, console.log);
