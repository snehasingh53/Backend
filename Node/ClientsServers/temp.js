/*/*
creating a local server
*/

const http = require('http'); // for communication 
const fs = require('fs');
const server=http.createServer((req,res)=>{ // callback function , run every time a request comes in to server
    //console.log(req.url,req.method);
//    console.log('request made');
    
// set header content type

  //res.setHeader('Content-Type','text/plain');

   // res.write('Hello , ninjas');
  /*
  res.setHeader('Content-Type','text/html');
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<p>Hello , ninjas </p>')
  res.write('<p>Hello again, ninjas </p>')

  res.end();
    */


  // returning html page

  res.setHeader('Content-Type','text/html');
  
  let path = './views'; // the html files are in views folder and therefore the path will always begin with views

  switch(req.url){
    case '/':
      path+='index.html'
      break;
    case '/about':
      path+='about.html'
      break;
    default:
      path+='404.html'
      break;
  }

  fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
        res.end();
    }else{
        //res.write(data);
        // if using only once we can directly use it in res.end

        res.end(data);
    }
  })
}); //create server using http


server.listen(3000,'localhost',()=>{
  
    console.log('listening for requests on port 3000')
}) //  3 parameter , port number and host , default value will be local host and a function  fires when we start listening  

/*
local host is like a domain name on th web    127.0.0.1 that points to own computer which is then acting as host 

Port number : are like doors into a computer 
 localhost:3000


*/
