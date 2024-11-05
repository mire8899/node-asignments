const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const HOSTNAME ='Localhost'
const PORT = 9000
const server= http.createServer((req,res)=>{
    if(req.url.startsWith('/tasks')){
        taskRouteses(req.res)
    }else{
        writehead(404,'Not Found',{'contant -Type':'Application/json'})
        req.end(JSON.stringify({
            Message:'sorry,you get lost'
        }))
        
    }
});
    server.listen(PORT,HOSTNAME,()=>{
        console.log('server runing on port ${PORT}');
        
    })