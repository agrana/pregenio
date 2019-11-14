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
            let [type, stat, length] = await Promise.all([response.headers.get('content-type'), response.status, response.headers.get('content-length')]);
            console.log(
                stat, type, Number(length), line 
            );
        } catch (error) {
            console.log(error);
        }
 });
