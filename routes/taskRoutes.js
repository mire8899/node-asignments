const taskRoutes= (req,res)=>{
    if(req.method='GET'){
        getTasks(req.res);
    }
    else if(req.method='POST'){
        CreateTask(req.res)
    }
    else if(req.method='PACH'){
        updateTask(req.res)
    }
    else if(req.method='DELETE'){
        DeleteTask(req.res)
    }
    else{
        res.writehead(404,'Data Not Found',{'contant Type':'Applicatoin/json'})
        res.end(JSON.stringify(({
            Message:"Unknown method required."

        })))
    }
    
    
}
module.exports=taskRoutes