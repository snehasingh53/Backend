const fs = require('fs'); // import file

//reading files
//fs.readfile('String: relevant path to what we wan to read ',()={ err, data}that will fire when its is complete)

fs.readFile('./docx/blg1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        //console.log(data); buffered output
        console.log(data.toString())
    }
}) // async function

console.log("last line ")

// writing files

/* syntax
fs.writeFile("relevant path","text that we want to write",callback function())
*/

fs.writeFile("./docx/blg1.txt"," Hello world",()=>{
    console.log("file was written")
})

// if we do this with the files that does not exist then it will create new file


//directories
/* syntax

fs.mkdir('directory path', callback function)
*/
if(!fs.existsSync("./assets")){ //sync code


fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("folder created");
})
}else{
    fs.rmdir('./assets',(err)=>{
        console.log(err);

    })
    console.log("folder deleted")
}

//deleting files

if(fs.existsSync('./docx/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt',(err)=>{
      
      if(err){
        console.log(err);
      }  
    console.log("file deleted")

    })
}
    