const express= require('express');
const app = express();

app.listen(3000);

app.get('/' , (request , respond)=>{

    respond.sendFile("./HTMLfiles/homePage.html" , {root : __dirname});
})

app.get('/about' , (request , respond)=>{

    respond.sendFile("./HTMLfiles/about.html" , {root : __dirname});
})

app.get('/about-us' , (request , respond)=>{

    respond.redirect('/about');
})

app.use((request , respond) =>{
    respond.status(404).sendFile("./HTMLfiles/pageNotFound.html" , {root : __dirname});
})