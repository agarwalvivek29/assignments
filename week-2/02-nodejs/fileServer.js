/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get('/:folder',(req,res)=>{
  let folder = req.params.folder;
  let folderPath = path.join("C:/Users/vivek/Github/100xdevs_MERN/week-2/02-nodejs", folder); 

  fs.readdir(folderPath,'utf-8',(err,files)=>{
    if(err){
      console.error("Kuch to galat h bhidu idhar!!");
      console.log(err);
      res.status(404).send("Route not found");
    }
    else{
      res.send(files);
    }
  });
});

app.get('/:folder/:file',(req,res)=>{
  let folder = req.params.folder;
  let file = req.params.file;
  let folderPath = path.join("C:/Users/vivek/Github/100xdevs_MERN/week-2/02-nodejs", folder,file);

  fs.readFile(folderPath,'utf-8',(err,data)=>{
    if(err){
      console.error("Bhiduu phirse nahi yaar!!!");
      res.status(404).send("File not found");
    }
    else{
      res.send(data);
    }
  });

});

app.listen(port,()=>{
  console.log(`Server is listening on port:${port}`);
});

module.exports = app;