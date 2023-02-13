const express=require("express")
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");

const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html")
});

app.post('/',(req,res)=>{
  const fname=req.body.fname;
  const lname=req.body.lname;
  const email=req.body.email;

 //d6cdfdd9fae3a0dbc5c21d112237521e-us18s
const data={
  members:[
    {
    email_address: email,
    status: "subscribed",
    merge_fields:{
      FNAME:firstName,
      LNAME:lastName
    }
  }
  ]
}
const jsonData=JSON.stringify(data)
const url= "https://us18.api.mailchimp.com/3.0/ed2f3d51b0."


const options={
  method:"POST",
  auth:"samiksha:d6cdfdd9fae3a0dbc5c21d112237521e-us18"
}

const request=https.request(url,options, function(response){
  
  response.on("data",function(data){
    console.log(JSON,parse(data));
  })
})
request.write(jsonData);
request.end();
})







app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});