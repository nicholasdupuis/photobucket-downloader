const fs = require('fs')
const request = require('request')

const fileNames = [];

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}

fs.readFile('photobucket.txt', 'utf8', (err, urls) => {
    if (err) throw err;
    urls.split('\n').forEach(url => {
        fileNames.push(url.split('/').splice(-1)[0].replace('.html', '').replace('\r', ''));
    });

    fileNames.forEach(file => {
        const url = `https://abc123.photobucket.com/albums/j243/user_name/${file}`;
        const path = `./images/${file}`;

        download(url, path, () => {
            console.log('Done!')
        });
    })
});



