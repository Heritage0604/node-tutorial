const {readFileSync,writeFileSync}=require("fs")

const first=readFileSync("./content/first.txt", "utf8")
const second=readFileSync("./content/second.txt", "utf8")
console.log(first,second)
writeFileSync("./content/result-sync.text",`Here is the result : ${first}/n${second}`,{flag:"a"})
// this reads and writes a file synchronously