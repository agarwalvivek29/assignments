const fs= require('fs')

var content='\nHello JavaScript file here';

fs.appendFile('C:/Users/vivek/Github/100xdevs_MERN/week-2/01-async-js/easy/4-write-to-file.md',content,'utf8',(err)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log("Data Appended Succesfully");

    fs.readFile('C:/Users/vivek/Github/100xdevs_MERN/week-2/01-async-js/easy/4-write-to-file.md','utf-8',(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
})


