Gearman = require('gearman').Gearman;

var appRouter = function(app) {
 

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/seed", function(req, res){
        if(!req.url) {
            res.status(400).send("400 bad request - you must send a seed url")
        }

        client = new Gearman("gearman1", 4730);

        client.on('WORK_COMPLETE', function(job){
            console.log('Seed submitted');
            return client.close();

        });

        client.connect(function(){
            return client.submitJob('crawl', req.url);
        })

    });

}
 
module.exports = appRouter;
