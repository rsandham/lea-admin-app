const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// noinspection JSCheckFunctionSignatures
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/bootstrap', express.static(path.join(__dirname, 'bootstrap')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/font-awesome', express.static(path.join(__dirname, 'font-awesome')));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'] });
});
app.get('/portfolio', (req, res) => {
  res.render('portfolio', { list: ['a', 'b'] });
});
app.get('/blog', (req, res) => {
  res.render('blog', { list: ['a', 'b'] });
});
app.get('/signup', (req, res) => {
  res.render('signup', { list: ['a', 'b'] });
});
app.get('/register', (req, res) => {
  res.render('register', { list: ['a', 'b'] });
});
app.get('/timeline', (req, res) => {
  res.render('timeline', { list: ['a', 'b'] });
});
app.get('/forms', (req, res) => {
  res.render('forms', { list: ['a', 'b'] });
});
app.get('/typography', (req, res) => {
  res.render('typography', { list: ['a', 'b'] });
});
app.get('/bootstrap-elements', (req, res) => {
  res.render('bootstrap-elements', { list: ['a', 'b'] });
});
app.get('/bootstrap-grid', (req, res) => {
  res.render('bootstrap-grid', { list: ['a', 'b'] });
});

app.listen(PORT, () => {
  debug(`listening at port ${chalk.bold.greenBright(PORT)}`);
});
