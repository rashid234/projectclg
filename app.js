var express=require('express')
var app = express();
const path = require('path');
const handlebars=require("express-handlebars");
const { K } = require('handlebars');
const bodyParser= require('body-parser');

//sheet settinng

//

app.use(bodyParser.urlencoded({ extended: true }));


//routes importing
const civilroute=require('./routes/civilroute')
const aeroroute=require('./routes/aeroroute')
//database importing
//var eventlist=require('./demo.js')
//
//database fetching
//let AERONAUTICALENGINEERING=[]
//AERONAUTICALENGINEERING=eventlist.results

//
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine('hbs',handlebars.engine({
  defaultLayout: 'main.hbs',
  layoutsDir :__dirname + '/views'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/civil-eventpage1',express.static(path.join(__dirname, 'public')));
app.use('/aero-eventpage1',express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res) {
    res.render("index.html");
    })

app.get('/home',function(req,res) {
    res.render("home.html");
  })

  app.get('/cse-eventpage1',function(req,res) {
      res.render("cse-eventpage1.html");
  })
 
  app.get('/mech-eventpage1',function(req,res) {
    res.render("mech-eventpage1.html");
  })
  app.get('/ece-eventpage1',function(req,res) {
  res.render("ece-eventpage1.html");
  })
  app.get('/mba-eventpage1',function(req,res) {
    res.render("mba-eventpage1.html");
  })
  app.get('/cse-evyentpage1',function(req,res) {
  res.render("cse-eventpage1.html");
  })
  /*
  app.post('/registered',function(req,res){
    console.log('registered')
    var dict=req.body
    if(dict.Event2=='NIL'){
      console.log('individual')
      workbook.xlsx.readFile(nameFileExcel)
.then(function()  {
    var worksheet = workbook.getWorksheet(1);
    var lastRow = worksheet.lastRow;
    console.log(lastRow.number)
    var getRowInsert = worksheet.getRow(++(lastRow.number));
    getRowInsert.getCell('A').value = dict.Text1;
    getRowInsert.getCell('B').value = dict.Mail1;
    getRowInsert.getCell('C').value = dict.Paswrd1;
    getRowInsert.getCell('D').value = dict.Event1;
    getRowInsert.commit();
    res.send('sucessfully registered')
    return workbook.xlsx.writeFile(nameFileExcel);
    
});
    }
    else{
      console.log('team')
    }
  })
  */
 app.post('/registered',function(req,res){
  res.send('no data stored')
 })

  app.use('/civil-eventpage1',civilroute)
  app.use('/aero-eventpage1',aeroroute)
   

    

app.listen(8000);