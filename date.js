module.exports=getDate
function getDate(){
var today =new Date();
    
var day="";

var option={
   weekday: "long",
   day: "numeric",
   month: "long"

};
var day =today.toLocaleDateString("en-US",option);
return day;
}

function getDay(){
    var today =new Date();
        
    var day="";
    
    var option={
       weekday: "long",
      
    
    };
    var day =today.toLocaleDateString("en-US",option);
    return day;
    }