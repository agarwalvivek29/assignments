const fs = require('fs')

fs.readFile("C:/Users/vivek/Github/100xdevs_MERN/week-2/01-async-js/easy/3-read-from-file.md",'utf8',(err,data)=>{
    if(err){
        console.log(`error : ${err}`);
    }
    else{
        console.log(data);
    }
})
x=0;
for(let i=0;i<100000;i++){
    console.log(`junk ${i}`)
}
console.log('Expensive op complete')