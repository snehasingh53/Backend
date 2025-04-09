//const xyz= require('./people');


//console.log(xyz.people,xyz.ages);   // empty object because no manually export 

//console.log(people) // importing does not give access to gain acees export manually 

//destructure
const {people, ages} = require('./people') ;// does have to be same as the property i want to destructure
console.log(people,ages)



const os= require('os'); // built-in
console.log(os.platform(),os.homedir());