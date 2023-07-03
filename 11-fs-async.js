const {readFile,writeFile} = require("fs")

readFile("./content/first.txt", "utf8" ,(err,result)=>{
    if (err) throw err
  const first =result
  readFile("./content/second.txt", "utf8", (err,result)=>{
    if (err) throw err
  const second =result
writeFile("./content/result-async.text",
`Here is the result : ${first}/n${second}`,
(err,result)=>{
     if (err) throw err
     console.log(result)
})
  })
  

})

// this is an async function for reading filesystem and writing filesystem