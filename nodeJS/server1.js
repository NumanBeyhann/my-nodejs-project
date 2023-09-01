// Node.js'in HTTP modülünü yüklüyoruz
// const http = require('http');

// const express = require ('express');

// const app = express();
// const router = express.Router({
//   strict: true,
// });

// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));

// const adminRoutes = require('./routes/admin')
// const shopRoutes = require('./routes/shop')




// router.use('/shop',shopRoutes);
// router.use('/admin',adminRoutes);



// app.use('/',(req,res,next)=>{
  
//    next();
// });

// router.use('/home?',(req,res,next)=>{
//   console.log('Bu bir middleware`dir!');
//   res.send('<h1>Sokucam borusuna da simdi he</h1>');
  
// },);



// router.use('/laptoplar',(req,res,next)=>{
//   res.send(`
//     <html>
//       <body>
//         <h1>laptoplar %50 Indirimli E sagolsun</h1>
//         <form action="/laptoplar" method="post">
//           <label for="model">Model:</label>
//           <input id="model" type="text" name="model">
//           <label for="price">Fiyat:</label>
//           <input id="price" type="number" name="price">
//           <input type="submit" value="Ekle">
//         </form>
//       </body>
//     </html>
//   `);
//   console.log(req.body);
// });




// router.use(function( req, res, next){
//   res.status(404).send('<h1>Page not found</h1>');
//   next();
// });

// app.use(router)

// Sunucuyu oluşturuyoruz
//  const server = http.createServer( app);
//   console.log(req);
//   //Gelen isteğe göre yanıt veriyoruz
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<html>');
//     res.write('<head><title>Enter Message</title></head>');
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write('</html>');
  
// });

// Sunucuyu 3000 numaralı portta dinliyoruz
// server.listen(3000);


// Sunucunun çalıştığını konsola yazdırıyoruz
// console.log('Sunucu http://localhost:3000 adresinde çalışıyor');



const path =require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine' , 'ejs');
app.set('views','views');

const pug = require('pug');
app.set('view engine', 'pug');


const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });

app.use((req, res, next) => {
  res.status(404).render('404')
});


app.listen(3000);
console.log('Sunucu http://localhost:3000 adresinde çalışıyor');

