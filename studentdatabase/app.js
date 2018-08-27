var express = require("express"), 
methodOverride = require("method-override"),
app = express(),
mongoose = require("mongoose"),
bodyParser = require('body-parser');
   
   mongoose.connect("mongodb://localhost/table1")
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static("public"));
  app.set("view engine","ejs");
  app.use(methodOverride("_method"));

  var tableSchema=new mongoose.Schema({
     idno:Number,
    name:String,
     age:Number,
     gender:String
  });
  
  var Table = mongoose.model("Table",tableSchema);
 
  app.get("/",function(req,res){
    res.redirect("/stu");
});
//   get
app.get("/stu",function(req,res){
    
 Table.find({},function(err,new1){
     if(err)
     {
         console.log(err);
     }
     else{
         res.render("index",{table: new1});
     }
 });
});

//create
 app.get("/stu/new",function(req,res){
      res.render("new"); 
   });
   app.post("/stu",function(req,res){
      var name=req.body.name,
       idno=req.body.idno,
      age=req.body.age,
      gender=req.body.gender;
      let table={name:name,idno:idno,age:age,gender:gender};
      Table.create(table,function(err,newelement){
         if(err)
         {
             
             console.log(err);
         }else{
             res.redirect("/");
         }
      });
   });
   
   
   
   // SHOW ROUTE
app.get("/stu/:id", function(req, res){
   Table.findById(req.params.id, function(err, foundstu){
       if(err){
           res.redirect("/stu");
       } else {
           res.render("show",{ table: foundstu});
       }
   });
});
      ///update route

app.get("/stu/:id/update", function(req, res){
    Table.findById(req.params.id, function(err, foundstu){
        if(err){
            res.redirect("/stu");
        } else {
            res.render("update", {table: foundstu});
        }
    });
});


// UPDATE ROUTE
app.put("/stu/:id", function(req, res){
     var name=req.body.name,
       idno=req.body.idno,
      age=req.body.age,
      gender=req.body.gender;
      let table={name:name,idno:idno,age:age,gender:gender};
   Table.findByIdAndUpdate(req.params.id, table, function(err, updatedstu){
      if(err){
          res.redirect("/stu");
      }  else {
          res.redirect("/stu/");
      }
   });
});
//delete route
app.delete("/stu/:id", function(req, res){
   //delete stu
   Table.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/stu");
       } else {
           res.redirect("/stu");
       }
   });
   //redirect somewhere
});

     //   Server listening
   app.listen(process.env.PORT,process.env.IP,function(){
      console.log("Server Started"); 
   });
   