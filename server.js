const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const { PORT, HOST, FIXTURES, CONNECTION } = process.env.NODE_ENV === "production" ? require('./config/env/production.js') : require('./config/env/development.js');
const setDependencies = require('./config/globals.js');
const { installFixtures } = require('./utils/index.js');

/**
 * @function bootstrap
 * @return {type} {bootstrap the connection and routes}
 */
const bootstrap = async () => {
  const routes = require('./config/routes.js');
  const connection = require('./config/connection.js');
  const middlewares = require('./config/middlewares/index.js');
  const fixtures = require('./config/fixtures/index.js');
  const compression = require('compression');
  let app = express();
  const http = require('http').Server(app);
  const io = require('socket.io')(http);
  global.io = io;
  const sockets = require('./sockets/index.js')();

  let middlewaresResult = await middlewares(app);
  if(middlewaresResult.ok) {
    app.use(express.static('./client/public'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', path.resolve(__dirname, './views'));
    let connectionResult = await connection();//start db connection
    if (connectionResult.ok) {
      debugger;
      if (FIXTURES) {
        let fixturesResult = await installFixtures(fixtures, connectionResult.result);
        //debugger;
        if (fixturesResult.ok === false) return errorStarting(fixturesResult.error);//log the error
        console.log(fixturesResult.result);
      }
      let routesLoades = await routes(app);//define routes
      //debugger;
      if (routesLoades.ok) {
          http.listen(PORT, HOST, () => console.log("App listen on: ", `${HOST}:${PORT}`))//lift the server
          debugger;
        } else {
        errorStarting(routesLoades.error);//log the error
      }
    } else {
      debugger;
      errorStarting(connectionResult.error);//log the error
    }
  } else {
    errorStarting(middlewaresResult.error);//log the error
  }
}

const errorStarting = (error) => {
  console.log('Unable to bootstrap the app ', error);
}

setDependencies()
  .then(bootstrap)
  .catch(errorStarting)
