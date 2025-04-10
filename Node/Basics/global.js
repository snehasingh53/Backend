//Global object 


console.log(global)


global.setTimeout(()=>{
    console.log("in the terminal")

    clearInterval(int);// int will run for every sec till setTimout is not triggered
},3000); // run after every 3 sec 


const int = setInterval(()=>{
   console.log("set interval")
},1000) // run for every second



console.log(__dirname); // current folder path
console.log(__filename);// absolute path with file


//console.log(document.querySelector); will not work 