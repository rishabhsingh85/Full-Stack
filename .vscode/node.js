// const fs=require('fs');
// fs.writeFile('example.txt','dhoni.txt',function(e){
//     if(e)console.log("error aa gya")
//         console.log('File created and data is written');
// });

// fs.readFile('example.txt','utf8',function(err,data){
//     if(err)console.log("Error reading file:",err);
//     else console.log('File content:',data);
// });
// fs.appendFile('example.txt','\nAppended text.',function(err){
//     if(err)console.log("Error appending to file:",err);
//     else console.log('Data appended to file!');
// });
// fs.readFile('example.txt','utf8',function(err,data){
//     if(err)console.log("Error reading file:",err);
//     else console.log('Updated file content:',data);
// });
// fs.unlink('example.txt',function(err){
//     if(err)console.log("Error deleting file:",err);
//     else console.log('File deleted successfully!');
// });

const fs=require('fs');
fs.writeFile('example.txt','Hello World!');
console.log("file not created");
    console.log("file created successfully");
console.log("mai chalunga file create hone ke baad")
