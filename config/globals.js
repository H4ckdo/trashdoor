const { surePromise, prometify, fieldContains, AttachMethods } = require('../utils/index.js');
const routes = require('./anchors/routes.json');
const models = require('./anchors/models.json');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
/*
let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLFloat
} = require('graphql');
*/
const dependencies = {
  fieldContains,
  mongoose,
  routes,
  models,
  AttachMethods,
  surePromise,
  prometify,
  bcrypt,
  _
}

/**
 * @function loadModels
 * @param  {type} models list of the models
 * @return {type} {description}
 */
const loadModels = (models = []) => {
  for (model of models) {
    global[model] = require(`../models/${model}`);
  }
  global.availableModels = models;
}

/**
 * @function setDependencies
 * @param  {type} const globalDependencies {description}
 * @return {type} {description}
 */
const setDependencies = dependencies => {
  _.each(_.keys(dependencies), dependencie => global[dependencie] = dependencies[dependencie])
  loadModels(models);
}

module.exports = () => prometify(
  setDependencies.bind(setDependencies, dependencies)
)
