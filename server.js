const http =require('http');
const fl = require('fs');




const server  = http.createServer((request , respond) => {

    $desPath = "./HTMLfiles/";

    respond.setHeader("Content-Type", "text/html");

    switch(request.url){
        case '/':
            $desPath += 'homePage.html';
            break;
        
        case '/about':
            $desPath += 'about.html';
            break;
        
        default :
            $desPath += 'pageNotFound.html';
        
    }

    fl.readFile($desPath , (err , content) => {

        if(err){
            console.log(err);
        }

        else{
            respond.write(content);
        }

        respond.end();

    })
});

server.listen(3000 , 'localhost' , () => {
    console.log("Start talking on port 3000...");
});
