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
    const params = {
        Document: {
            Bytes: buffer
        }
    };

    textract.detectDocumentText (params, (err, data) =>
        err ? reject (err) : resolve (data));
});


fs.readFile ('../data/IMG_0171.JPG', (err, data) => {
    if (err) {
        console.error (err);
    } else {
        const future = detectText (data);
        future.fork(console.error, console.log);
    }
});
