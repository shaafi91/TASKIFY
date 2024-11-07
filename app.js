const http = require ('http');
const taskRoutes = require('./routes/taskroutes');

const HOSTNAME = "localhost"
const PORT = 9000

const server = http.createServer((req,res) => {
    if(req.url.startwith('/tasks')){
        taskRoutes(req, res)
    }
    else{
        res.writeHEAD(404, 'not found', {'comtent type': 'application/json'} )
        res.end(JSON.stringfy({ 
            message: 'sorry, you got lost!'
        }))
    }

});

Server.listen = (PORT, HOSTNAME, () => {
    console.log(`server running on port ${PORT}`)
})