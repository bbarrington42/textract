'use strict';

const {create, env} = require ('sanctuary');

const {env: flutureEnv} = require ('fluture-sanctuary-types');

const S = create ({
    checkTypes: process.env.NODE_ENV !== 'production',
    env: env.concat (flutureEnv)
});


const fs = require ('fs');
const {extractText} = require('../lib/extract');


extractText(fs.readFileSync('../data/IMG_0171.JPG')).fork(console.error, console.log);

