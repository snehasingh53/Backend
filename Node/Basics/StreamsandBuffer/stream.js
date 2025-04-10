/*
Streams: start using data, before it has finished loading 

*/

const fs = require('fs');

const readStream= fs.createReadStream('./docx/blg3.txt',{encoding:"utf8"});
const writeStream= fs.createWriteStream('./docx/blg4.txt');



readStream.on('data',(chunk)=>{// on is an event listener
    console.log('------- NEW CHUNK------');
    console.log(chunk);
    writeStream.write('\n New Chunk');
    writeStream.write(chunk);
})
//piping
readStream.pipe(writeStream)



//Duplex Stream

