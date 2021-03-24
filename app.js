const {sequelize} = require('./models');

const postRoutes = require('./routes/postRoutes');
const usersRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const relationshipRoutes = require('./routes/relationshipRoutes');

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

app.use(usersRoutes);

app.use(postRoutes);

app.use(commentRoutes);

app.use(reactionRoutes);

app.use(relationshipRoutes);


