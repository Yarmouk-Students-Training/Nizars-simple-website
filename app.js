const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

const dpurl = "mongodb+srv://nizar2:test1234@nizarcluster.nc8uf.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(dpurl ,{

  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then((res) => {
    
    console.log("Connected");
    app.listen(3000)
  })
  .catch((err)=>
  console.log("Connection error" , err)
  );

app.use(express.static('Public_Files'));

app.use(express.urlencoded({
  
  extended: true 
})
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  res.redirect('/blogs')
});

app.get('/about', (req, res) => {

  res.render('about', {
     
    title: 'About' 
  });
});

app.get('/about-us', (req, res) => {

  res.redirect('/about');
});

app.use('/blogs',blogRoutes);

app.use('/users',usersRoutes);

app.use((req, res) => {

  res.status(404).render('404', {

    title: '404' 
  });
});
