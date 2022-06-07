const express=require("express");
const bodyParse=require("body-parser");
const res = require("express/lib/response");
const date =require(__dirname +"/date.js")
// console.log(date());
const app =express();
var items=["Buy Food","Cook Food","Eat Food"];
let workItem=[];
app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/" ,function(req,res){

   let day =date();

    res.render("list",{listTittle: day, newListItem:items}) ; //ejs syntax 

});

app.post("/",(req,res)=>{

// console.log(req.body)
var item =req.body.newItem;

// console.log(req.body);

// if(req.body.deleteit==='Monday,'||'Tuesday,'||'Wednesday,'||'Thursday' || 'Friday,'||'Saturday,' ||'Sunday,')
if(req.body.deleteit==='Monday,' || req.body.deleteit==='Tuesday,' || req.body.deleteit==='Wednesday,' || req.body.deleteit==='Thursday,'|| req.body.deleteit==='Friday,'|| req.body.deleteit==='Saturday,'|| req.body.deleteit==='Sunday,' )
{
   items.pop(item);
   res.redirect("/");
}

else{

if(req.body.button==='Work'){
      workItem.push(item);
      res.redirect("/work")
   }
 else{

  items.push(item)
  res.redirect("/");
 }
}
});

app.get("/work",(req,res)=>{
    res.render("list", {listTittle:"Work List", newListItem:workItem});
});

app.post("/work",(req,res)=>{
    let item =req.body.newItem;
    if(req.body.deleteit==='Work'){
     workItem.pop(item);
     res.redirect("/work");
    }
    else{
        workItem.push(item);
    // console.log(req.body.deleteit);
        res.redirect("/work");
    }
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});