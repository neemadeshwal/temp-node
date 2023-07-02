// we have to use callback function in async case.

const {readFile,writeFile}=require('fs')

readFile('./new-folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    writeFile(
        './new-folder/result-async.txt',`async-result: ${first}`,(err)=>{
            if(err){
                console.log(err)
            }
        }
    )
})