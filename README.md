# pregenio
Async url fetcher with limits. 

Dependencies:

- npm install node-fetch
- npm install readline
- npm install promise-limit

Running it:

`node pregenio.js file limit`

Where: 

- file  is a accesible file with urls to fetch one per line. 
- limit (integer) amount of outstanding promises to allow inflight
