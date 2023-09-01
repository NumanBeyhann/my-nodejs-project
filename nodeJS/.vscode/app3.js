var http = require('html');
var express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req,res,next)=> {

    next();

});

// app.use ('/anasayfa', (req,res,nest)=>{
//     res.send('<h1> ANASAYFAYA HOSGELDINIZ </h1>');
//     console.log("anasayfaya giris basarili!");

// });
app.use ('/anasayfa', (req,res,nest)=>{
    // Link eklemek için HTML kodunu res.send() yöntemi ile gönderin
    res.send('<h1> ANASAYFAYA HOSGELDINIZ </h1> <a href="/iletisim">Iletisim sayfasina gitmek icin tiklayin</a>');
    console.log("anasayfaya giris basarili!");
});


app.get('/iletisim', function (req, res) {
    // Iletisim formunu HTML olarak olusturun
    var form = '<form action="/iletisim" method="post">' +
               '<label for="name">Adiniz:</label>' +
               '<input id="name" type="text" name="name" required>' +
               '<label for="email">E-posta adresiniz:</label>' +
               '<input id="email" type="email" name="email" required>' +
               '<label for="message">Mesajiniz:</label>' +
               '<textarea id="message" name="message" rows="5" cols="40" required></textarea>' +
               '<input type="submit" value="Gonder">' +
               '</form>';
    // Formu res.send() yöntemi ile gönderin
    res.send(form);
});

app.post('/iletisim', function (req, res) {
    // Form verilerini req.body nesnesinden okuyun
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    // Form verilerini konsola yazdırın
    console.log('Ad: ' + name);
    console.log('E-posta: ' + email);
    console.log('Mesaj: ' + message);
    // İstemciye bir yanıt gönderin
    res.send('Mesajiniz alinmistir. Tesekkurler!');
});

const server = http.createServer(app); //server kurma kodu..

server.listen(3000);

console.log('Sunucu http://localhost:3000 adresinde çalışıyor');

