var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// const models = require('./db/models');
let config= {
  rethinkdb : {
    host: "localhost",
    port: 28015,
    authKey: "",
    db: "rethinkdb_ex"
  }
}

const r = require('rethinkdb');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





/*
 * Create a RethinkDB connection, and save it in req._rdbConn
 */
function createConnection(req, res, next) {
  r.connect({
      host: "localhost",
      port: 28015,
      authKey: "",
      db: "rethinkdb_ex"
  }).then(function(conn) {
      req._rdbConn = conn;
      next();
  }).error(handleError(res));
}

/*
* Close the RethinkDB connection
*/
function closeConnection(req, res, next) {
  req._rdbConn.close();
}

/*
* Create tables/indexes then start express
*/
r.connect(config.rethinkdb, function(err, conn) {
  if (err) {
      console.log("Could not open a connection to initialize the database");
      console.log(err.message);
      process.exit(1);
  }

  r.table('todos').indexWait('createdAt').run(conn).then(function(err, result) {
      console.log("Table and index are available, starting express...");
      startExpress();
  }).error(function(err) {
      // The database/table/index was not available, create them
      r.dbCreate(config.rethinkdb.db).run(conn).finally(function() {
          return r.tableCreate('todos').run(conn)
      }).finally(function() {
          r.table('todos').indexCreate('createdAt').run(conn);
      }).finally(function(result) {
          r.table('todos').indexWait('createdAt').run(conn)
      }).then(function(result) {
          console.log("Table and index are available, starting express...");
          startExpress();
          conn.close();
      }).error(function(err) {
          if (err) {
              console.log("Could not wait for the completion of the index `todos`");
              console.log(err);
              process.exit(1);
          }
          console.log("Table and index are available, starting express...");
          startExpress();
          conn.close();
      });
  });
});

function startExpress() {
  app.listen(config.express.port);
  console.log('Listening on port '+config.express.port);
}
module.exports = app;
