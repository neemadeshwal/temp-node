const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./new-folder/first.txt','utf8')
const second=readFileSync('./new-folder/second.txt','utf8')

console.log(first,second)

writeFileSync('./new-folder/result-sync.txt',`here is the output file :${first} ,${ second}`,{flag:'a'})
