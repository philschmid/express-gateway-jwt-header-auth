module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
      pluginContext.registerPolicy(require('./policies/jwt-auth'));
    //   pluginContext.registerCondition(require('./conditions/url-match'));
    //   pluginContext.registerGatewayRoute(require('./routes/hello-eg'));
    //   pluginContext.registerAdminRoute(require('./routes/hello-admin'));
         
    },
    policies: ['jwt-header'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
    options: { // This is for CLI to ask about params 'eg plugin configure example'
      role: {
        title: 'Authorization Role',
        type: 'string',
        required: true
      },
      maxRequestsPerSecond: {
        title: 'Max Requests per second',
        description: 'the max rps value',
        type: 'number'
      }
    }
  };