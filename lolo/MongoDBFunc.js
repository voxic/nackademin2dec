// The export handler will run every time the event is triggered
exports.handler = async(ev, ctx) => {
    const { route, log } = ctx;
  
    // Log contents of the event
    log.info("Event data: ", JSON.stringify(ev.rawBody));
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': '<--URL data API-->/insertOne',
        'headers': {
          'api-key': '<--API-key from mongodb-->',
          'Content-Type': 'application/json'
        },
        body: '{\n    "collection":"tempdata",\n    "database":"lolo",\n    "dataSource":"Cluster0",\n    "document": ' + JSON.stringify(JSON.parse(ev.rawBody)) +'}'
  
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        ctx.emit('response', { })
        route(response.body);
      });
  
    // Route event data to the default output port
    
  };
  
  // The setup runs when the application is initialized
  exports.setup = async ctx => {
    const { } = ctx;
  };