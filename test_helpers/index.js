import '@babel/register';
import '@babel/polyfill';

let factory_girl = require('factory-girl');
const adapter = new factory_girl.SequelizeAdapter();
let factory = factory_girl.factory;
factory.setAdapter(adapter);

let Models = require('../models');

// clean the factory state - necessary for mocha watch
factory.cleanUp();
factory.factories = [];

// define factories
require('./factories')(factory, Models);

beforeEach(async function () {
  factory.resetSeq();
  await Models.sequelize.sync({force: true});
});

/* uncomment to see UnhandledPromiseRejectionWarning stack traces */
/*
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p);
  console.log('reason:', reason);
});
*/

export default {
  factory,
  Models,
}
