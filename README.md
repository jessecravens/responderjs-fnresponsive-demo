    

# Responder Demo Application

An express application that uses [responder](https://github.com/frogdesign/responder) middleware and Randall Elliot's fn Responsive framework.


    app.configure(function(){
      app.use(responder.init());
    });

## Set up

    $ npm install

    $ node app


## Gotchas

###Application Config

You currently must change this path manually within the module, this eventually will be abstracted out.

So in node_modules/responder/lib/responder.js change the following: 

    // the config file path should change, to the root of your application
    nconf.argv()
        .env()
        .file({ file: './lib/config.json' });
        
to this: 

    // the config file path should change, to the root of your application
    nconf.argv()
         .env()
         .file({ file: './node_modules/responder/lib/config.json' });
         
         
         
         
         