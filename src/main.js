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

// Futurized asynchronous read file
const readFile = path => Future((reject, resolve) => {
   fs.readFile(path, (err, data) => err ? reject(err) : resolve(data));
});

const image = readFile('../data/IMG_0171.JPG');

const lines = S.pipe([Future.chain(extractText), S.map(getLines)])(image);


Future.fork(console.error, console.log, lines);
