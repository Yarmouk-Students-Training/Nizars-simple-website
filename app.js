const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog=require('./modules/blogs');

const app = express();
const dpurl = "mongodb+srv://nizar1:test1234@nizarcluster.nc8uf.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(dpurl ,{useNewUrlParser:true,useUnifiedTopology:true})
  .then((res) => app.listen(3000))
  .catch((err)=>console.log("Connection error" , err));

var db = mongoose.connection;
 


app.use(express.static('Public_Files'));
app.set('view engine', 'ejs');

app.get('/add-blog', (req, res) => {
const blog = new Blog({
  title : 'new blog',
  snippet:"about my new blog",
  body : "more about my new blog"
});

blog.save()
.then((result)=>{
  res.send(result)
})
.catch((err)=>console.log(err));
});

app.get('/all-blogs', (req, res) => {  
  Blog.find()
  .then((result)=>res.send(result))
  .catch((err)=>console.log(err));
  });

  app.get('/single-blog', (req, res) => {  
    Blog.findById('60523b3caca5fe16c41e9910')
    .then((result)=>res.send(result))
    .catch((err)=>console.log(err));
    });
    
    app.get('/blogs', (req, res) => {
      Blog.find().sort({ createdAt: -1 })
        .then(result => {
          res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
          console.log(err);
        });
    });

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
}); 

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
