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


app.get('/user/new' , (res ,req)=>{
    
});
app.post('/user/create', (res ,req)=>{
    
});
app.get('/user/:userid', (res ,req)=>{
    
});

app.get('/user/login', (res ,req)=>{
    
});


app.get('/post/new', (res ,req)=>{
    
});

app.post('/post/create', (res ,req)=>{
    
});

app.get('/post/:postid', (res ,req)=>{
    
});

app.put('/post/:postid', (res ,req)=>{
    
});

app.delete('/post/:postid', (res ,req)=>{
    
});

app.get('/post/user/:userid', (res ,req)=>{
    
});


app.get('/posts', (res ,req)=>{
    
});

app.get('/comment/new', (res ,req)=>{
    
});

app.post('/comment/create', (res ,req)=>{
    
});

app.get('/comments/:post_id', (res ,req)=>{
    
});

app.delete('/comment/:commentid', (res ,req)=>{
    
});

app.put('/comment/:commentid', (res ,req)=>{
    
});

app.get('/reaction/new', (res ,req)=>{
    
});

app.post('/reaction/create', (res ,req)=>{
    
});


app.get('/reactions/r_id/:reaction_id', (res ,req)=>{
    
});

app.get('/reactions/:post_id', (res ,req)=>{
    
});

app.delete('/reaction/:reactionid', (res ,req)=>{
    
});

app.put('/reaction/:reactionid', (res ,req)=>{
    
});

app.get('/friends/:user_id', (res, req)=>{

});
