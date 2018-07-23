'use strict';
const fs = require('fs');
const fetch = require('node-fetch');
const readline = require('readline');
const rfile = '/Users/alfonso/Desktop/lists/recom_final.txt';
const promiseLimit = require('promise-limit');
var limit = promiseLimit(10)

var lineReader = readline.createInterface({
    input: fs.createReadStream(rfile)
});

lineReader.on('line', async function (line) {
    //return limit;
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