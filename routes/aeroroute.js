const express=require("express")
const router=express.Router()

let events=[{title:"Planetarium",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"201",fee1:"40",fee2:"60",coordinator1:"Afkar",coordinator1no:"1234567890",coordinator2:"mrudula",coordinator2no:"0987654321"},
{title:"Flight-Simulator",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"Afkar2",coordinator1no:"12345678",coordinator2:"mrudula2",coordinator2no:"09876541"},
{title:"piano",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"sunny2",coordinator1no:"12345678",coordinator2:"ramanan2",coordinator2no:"09876541"},
{title:"AutocadWorkshop",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"Affkk2",coordinator1no:"12345678",coordinator2:"sugu2",coordinator2no:"0987677541"}]

abc=[]
router.get('/',function(req,res) {
    res.render("aero-eventpage1.html");
})
router.get('/Planetarium',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(events))
    {
      console.log(a.slice(1))
      if(values.title==a.slice(1))
      {
        abc[0]=events[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
  })

  router.get('/Flight-Simulator',function(req,res) {
    a=req.route.path;
    for(var [key,values] of Object.entries(events))
      {
        console.log(a.slice(1))
        if(values.title==a.slice(1))
        {
          abc[0]=events[key]
          break;
        }
      }
    res.render("eventdescript.hbs",{abc});
    })
/*
    router.get('/piano',function(req,res) {
      a=req.route.path;
      for(var [key,values] of Object.entries(events))
        {
          console.log(a.slice(1))
          if(values.title==a.slice(1))
          {
            abc[0]=events[key]
            break;
          }
        }
      res.render("eventdescript.hbs",{abc});
      })

      
    router.get('/AutocadWorkshop',function(req,res) {
      a=req.route.path;
      for(var [key,values] of Object.entries(events))
        {
          console.log(a.slice(1))
          if(values.title==a.slice(1))
          {
            abc[0]=events[key]
            break;
          }
        }
      res.render("eventdescript.hbs",{abc});
      })
*/ router.get(/register/,function(req,res) {
  a=req.originalUrl
  console.log(a)
  for(var [key,values] of Object.entries(events))
    {
      console.log(a.slice(9))
      if(values.title==a.slice(9))
      {
          console.log('helloworld')
        abc[0]=events[key]
        break;
      }
    }

  res.render("registerf.hbs",{abc});
  })

      module.exports=router