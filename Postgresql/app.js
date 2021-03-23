const {sequelize} = require('./models');
const express=require('express');
const app = express();

async function main(){
    await sequelize.sync({alter : true});
}

//main()
app.listen(3000);

app.get('/' , (res ,req)=>{
    return res.json();
});


app.get('/user/create' , (res ,req)=>{
    
});
app.post('/user/create', (res ,req)=>{
    
});
app.get('/user/:userid', (res ,req)=>{
    
});

app.get('/user/login', (res ,req)=>{
    
});


app.get('/post/create', (res ,req)=>{
    
});

app.post('/post/create', (res ,req)=>{
    
});

app.get('/post/:postid', (res ,req)=>{
    
});

app.put('/post/:postid', (res ,req)=>{
    
});

app.delete('/post/:postid', (res ,req)=>{
    
});

app.get('/post/:userid', (res ,req)=>{
    
});


app.get('/post', (res ,req)=>{
    
});

app.get('/comment/create', (res ,req)=>{
    
});

app.post('/comment/create', (res ,req)=>{
    
});

app.get('/comment/:commentid', (res ,req)=>{
    
});

app.delete('/comment/:commentid', (res ,req)=>{
    
});

app.put('/comment/:commentid', (res ,req)=>{
    
});

app.get('/reaction/create', (res ,req)=>{
    
});

app.post('/reaction/create', (res ,req)=>{
    
});

app.get('/reaction/:reactionid', (res ,req)=>{
    
});

app.delete('/reaction/:reactionid', (res ,req)=>{
    
});

app.put('/reaction/:reactionid', (res ,req)=>{
    
});
