const express= require('express');
const cors=require('cors');
const courseController=require('./controllers/courseController');
const router= require('./routes/courseRoute.js');
var app=express();
app.use(express.json());

app.use(express.urlencoded({extended: false}));

var corOptions={
    origin: 'https://localhost:8081'
}
app.use(cors(corOptions));

app.use(router);

app.set('view engine','ejs');


app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.redirect('/getCourse');
}); 

const PORT=process.env.PORT || 3001 


// courseController(app);
app.listen(PORT);
