module.exports = {
  main: function (app, base) {
    app.get('/ping', (req, res) => {
      res.send('PONG');
    });
  },
};
