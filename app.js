const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog=require('./modules/blogs');

const app = express();
const dpurl = "mongodb+srv://nizar2:test1234@nizarcluster.nc8uf.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(dpurl ,{useNewUrlParser:true,useUnifiedTopology:true})
  .then((res) => {console.log("Done");app.listen(3000)})
  .catch((err)=>console.log("Connection error" , err));


 


app.use(express.static('Public_Files'));
app.use(express.urlencoded({ extended: true }));
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

  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
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
  res.redirect('/blogs')
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
}); 

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
  .then(result => {
    res.render('details', { blog: result, title: 'detailed' });
  })
  .catch(err => {
    console.log(err);
  });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});


app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
