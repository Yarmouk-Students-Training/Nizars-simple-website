const {sequelize} = require('./models');
const {reIssue} = require('./tokens');
const bodyParser = require('body-parser');
require('dotenv').config()

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const commentRoutes = require('./routes/commentRoutes.js');
const reactionRoutes = require('./routes/reactionRoutes.js');
const relationshipRoutes = require('./routes/relationshipRoutes.js');

const express=require('express');
const app = express();

//const sync=require('./sync.js');

app.listen(3000 , async ()=>{
    await sequelize.authenticate();

});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' , (res ,req)=>{
    return res.json();
});

app.get('/refresh' ,reIssue);

app.use(userRoutes);

app.use(postRoutes);

app.use(commentRoutes);

app.use(reactionRoutes);

app.use(relationshipRoutes);


