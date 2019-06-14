'use strict';

// const {create, env} = require ('sanctuary');
//
// const {env: flutureEnv} = require ('fluture-sanctuary-types');
//
// const S = create ({
//     checkTypes: process.env.NODE_ENV !== 'production',
//     env: env.concat (flutureEnv)
// });

const Textract = require ('aws-sdk/clients/textract');
const textract = new Textract ({
    region: 'us-east-1'
});

const Future = require ('fluture');


const extractText = buffer => Future ((reject, resolve) => {

    textract.detectDocumentText ({
        Document: {
            Bytes: buffer
        }
    }, (err, res) =>
        err ? reject (err) : resolve (res));
});

module.exports = {
    extractText
};
