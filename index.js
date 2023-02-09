const http=require('http');
const  app=requie('./app');
const port=process.env.PORT || 3000
const server=http.createServer(app);
app.get("/",(req,res)=>{
    res.send("Hello I am live");
});

app.listen(port,()=>{
console.log("Hello I am live again")
})