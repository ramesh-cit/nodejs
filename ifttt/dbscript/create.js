use ifttt;
printjson(db.getCollectionNames());
db.user.remove();
db.user.insert(
  {
    userid:1,
    name:'Ramesh Samarasam',
    password:'',
    email:'ramesh.cit@gmail.com',
    authentication: {
      twoStep:false
    },
    timezone:"(GMT+05:30) Chennai",
    emailCommunication:{
      news:false,
      tips:true,
      alerts:true
    },
    recipie:{
      channel:1,
      recipie:1,
      parameter:[
          {
            name:'forecast',
            value:'Rain'
          },
          {
            name:'email',
            value:'ramesh@whitelotus.co.in'
          }
      ]
    }
  }
);
db.channel.remove();
db.channel.insert(
 {
   cid:1,
   type:'rest-api',
   name:'Weather',
   desc:'Connect services to weather conditions and the temperature to get notifications, adjust settings, log environmental data, and more.',
   icon:'',
   status:'Active',
   recipie: {
     rid:1,
     name:'Rain tomorrow ? Get a mobile notification ',
     desc:"When the forecast calls for rain tomorrow in your area you'll get a push notification. Remember to bring an umbrella!",
     author:'Amutha Devi',
     likes:100,
     input:[
           {
             sequence:1,
             name:"forecast",
             label:"This trigger monitors changes in tomorrow’s forecasted weather condition.",
             type:'list',
             value:['Rain', 'Snow','Cloudy']
           },
           {
             sequence:2,
             name:"email",
             label:"Email Id",
             type:'input-box'
           }
       ],
       trigger:{
         apiUrl:'\weather\alert',
         apiArgument:["forecast","email"]
       }
     }
   });

db.channel.insert(
 {
    cid:'2',
   type:'rest-api',
   name:'BestBuy',
   description:'Best Buy Online Shopping',
   icon:'',
   status:'Active'
  });
  db.channel.insert(
   {
      cid:'3',
     type:'rest-api',
     name:'Google Drive',
     description:'Google Drive lets you store and access your files anywhere — on the web, on your hard drive, or on the go',
     icon:'',
     status:'Active'
    });
