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

  res.send(req.body);

});
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})