'use strict';
const fs = require('fs');
const fetch = require('node-fetch');
const readline = require('readline');
const promiseLimit = require('promise-limit');
//
const rfile = process.argv[2];
var limit = promiseLimit(process.argv[3])

var lineReader = readline.createInterface({
    input: fs.createReadStream(rfile)
});

lineReader.on('line', async function (line) {
        try {

            const toget = await limit(() => console.log(line));
            const response = await limit(() => fetch(line));
            const json = await response.status;
            console.log(
                toget
            );
            console.log(
                response.status
            );
        } catch (error) {
            console.log(error);
        }
 }); 