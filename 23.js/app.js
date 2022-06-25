const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
// пользовательская страница 500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
});
app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.');
});
app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Главная страница - получение информациии');
});
app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('О главной странице');
});
app.get('/about*', function (req, res) {
    // отправляем контент...
})
app.get('/about/contact', function (req, res) {
    // отправляем контент...
})
app.get('/about/directions', function (req, res) {
    // отправляем контент...
})
app.use(express.static(__dirname + '/public'));