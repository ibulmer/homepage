module.exports = function(app, express){
  app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dirname+'/../client/app/views/'});
  })
};