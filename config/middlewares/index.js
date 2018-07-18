const bodyParser = require('body-parser');
const uploadFiles = require('./uploadFiles.js');
//const graphql = require('./graphql/index.js');
const logger = require('morgan');
const onDev = process.env.NODE_MODULE === "development";
const compression = require('compression');

let middlewares = [
  compression,
  () => logger('common'),//logger middleware
  () => bodyParser.json(),
  () => bodyParser.urlencoded({ extended: true }),
  uploadFiles,
  //graphql,
]

/**
 * @function attachMiddleware
 * @param  {type} middlewares {description}
 * @param  {type} app         {description}
 * @return {type} {description}
 */
const attachMiddleware = (middlewares, app) => {
  for (middleware of middlewares) {
    let result = middleware();
    let { payload = null, path = null } = result;
    if (payload && path) {
      app.use(path, payload);
    } else if (result) {
      app.use(result);
    }
  }
}

module.exports = (app) => surePromise(
  prometify(
    attachMiddleware.bind(attachMiddleware, middlewares, app)
  )
)
