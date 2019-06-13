'use strict';

const {create, env} = require ('sanctuary');

const {env: flutureEnv} = require ('fluture-sanctuary-types');

const S = create ({
    checkTypes: process.env.NODE_ENV !== 'production',
    env: env.concat (flutureEnv)
});

const Textract = require ('aws-sdk/clients/textract');
const textract = new Textract ({
    region: 'us-east-1'
});

const fs = require ('fs');

const Future = require ('fluture');
// const EOL = require ('os').EOL;
//
// const matcher = require ('./matcher');


const detectText = buffer => Future ((reject, resolve) => {

    textract.detectDocumentText ({
        Document: {
            Bytes: buffer
        }
    }, (err, res) =>
        err ? reject (err) : resolve (res));
});

detectText(fs.readFileSync('../data/IMG_0171.JPG')).fork(console.error, console.log);


// const readFile = path => Future ((reject, resolve) => {
//     fs.readFile (path, (err, res) => err ? reject (err) : resolve (res));
// });
//
// const future = readFile ('../data/IMG_0171.JPG');
//
// const result = S.chain (detectText) (future);
//
//
// result.fork (err => console.error(err.message), json => console.log(JSON.stringify(json)));
