const https = require('https');
const _api_Key = '';
const data = JSON.stringify({
    "input": "A long.",
    "model": "text-embedding-ada-002",
    "encoding_format":"float"
});
const options = {
    hostname: 'api.openai.com',
    port: 443,
    path: '/v1/embeddings',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _api_Key,
    }
};

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});
req.write(data);
req.end();
