let fs = require('fs'); 

let rStream = fs.createReadStream('./data.txt');
rStream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
})

let wStream = fs.createWriteStream('./output.txt');

rStream.pipe(wStream);


wStream.on('end', () => {
    console.log('All the data wrote.');
});

console.log("Done...");