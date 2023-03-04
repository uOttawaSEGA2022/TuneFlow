
const express = require("express");
const bodyParser = require("body-parser")
  
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/survey.html");
});
  
app.post("/", function(req, res) {
  var firstName = String(req.body.firstName);
  var lastName = String(req.body.lastName);
  var age = String(req.body.age);
  var age = String(req.body.ad);
  var age = String(req.body.search);
  var age = String(req.body.reccomended);
    
    
  res.send("First Name - " + firstName);
  res.send("Last Name - " + lastName);
  res.send("Age - " + age);
  res.send("ad - " + ad);
  res.send("search - " + search);
  res.send("recommended - " + recommended);
  res.send("Do you feel comfortable completing an online purchase through this site? - " + firstName);
  res.send("How likely are you to visit this site again? - " + firstName);
  res.send("What changes would you make to this site? - " + firstName);
  res.send("Do you have any other comments? - " + firstName);

});
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})