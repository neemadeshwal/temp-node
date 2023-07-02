/// path module

const path=require('path')

const myPath=path.sep

console.log(myPath)

const filePath=path.join('./NODE-YOUTUBE/','new-folder','new.txt')
console.log(filePath)

    
    
const base=path.basename(filePath)
console.log(base)  
// output=text.txt

const absolute=path.resolve(__dirname,'NODE-YOUTUBE','new-folder','new.txt')
console.log(absolutes)