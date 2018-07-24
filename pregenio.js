'use strict';
const fs = require('fs');
const fetch = require('node-fetch');
const readline = require('readline');
const promiseLimit = require('promise-limit');
//
const rfile = process.argv[2];
var limit = promiseLimit(process.argv[3])
//
var lineReader = readline.createInterface({
    input: fs.createReadStream(rfile)
});
//
lineReader.on('line', async function (line) {
        try {
            const response = await limit(() => fetch(line));
            const type = await response.headers.get('content-type');
            const stat = await response.status;
            const length = await response.headers.get('content-length');
            console.log(
                stat, type, Number(length), line 
            );
        } catch (error) {
            console.log(error);
        }
 });
