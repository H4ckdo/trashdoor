module.exports = (routes, controllerClass) => {
  //controllerClass.methods = {};
  let controllerName = controllerClass.name;
  let controllers = _.keys(routes);
  debugger;
  let index = _.findIndex(controllers, item => item === controllerName)
  let controller;
  //debugger
  if(typeof controllers[index] === 'undefined') {
    let error = new Error('controller not found');
    error.description = `${controllers} is not undefined`;
    throw error;
  } else {
    controller = routes[controllers[index]];
  }
  let methods = _.keys(controller);
  _.each(methods, (method) => {
    _.each(controller[method], config => {
      if (typeof controllerClass.prototype[config.handler] === 'undefined') {
        controllerClass.prototype[config.handler] = require(`../controllers/${controllerName}/${config.handler}.js`);
      }
    })

  })
  //debugger;
  return controllerClass;
}
