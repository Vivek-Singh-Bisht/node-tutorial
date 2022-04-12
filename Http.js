const http=require("http");


const server=http.createServer((req,res)=>{
    if(req.url==="/")
        res.end("you are in the home page")
    if(req.url==="/activites")
        res.end("you are in the activities page") 
 res.end(`<h1>OOOOPss</h1>
        <p> No such page exists...please return to home page</p>
        <a href="/">back home</a>
 `)
})

server.listen(3000)