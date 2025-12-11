const fs= require('fs');

//sync

fs.writeFileSync('example.txt','hello fs module');

//async
fs.writeFile('example_async.txt','Hello hy js',(err)=>{
    if(err) {
    console.log(err);
    }
});

//append sync
fs.appendFileSync('example.txt',new Date().tolocalString()+ "\n");

//append async
fs.appendFile('example.txt',new Date().toLocaleString() + "\n",(err)=>{
    if(err){
    console.log(err);
    }
});

//read sync
const data= fs.readFileSync('example.txt','utf-8');
console.log('is read:\n',data);

//read async
fs.readFile('example.txt','utf-8',(err,data)=>{
    if(err){
        console.log('File read asynchronously:\n',data);
    }
    else{
        console.log(' is async:',err);
    }
});