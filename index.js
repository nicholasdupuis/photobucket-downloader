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

    // Build an array of filenames from photobucket.txt
    urls.split('\n').forEach(url => {
        fileNames.push(url.split('/').splice(-1)[0].replace('.html', '').replace('\r', ''));
    });

    // Create images directory if one does not exist
    fs.access('./images', (err) => {
        if (err) {
            fs.mkdir('./images', (err) => {
                if (err) throw err;
            });
        }
    });

    // Download each file from Photobucket
    fileNames.forEach(file => {
        const url = `https://abc123.photobucket.com/albums/a123/your_user_name/${file}`;
        const path = `./images/${file}`;

        download(url, path, () => {
            console.log(`${file} Downloaded!`)
        });
    })
});



