# Microservices example

This is an example of a suite of small services that make up a web crawler / search engine

It is not intended as a production-ready system, purely as a test-bed for docker and other technologies.  Therefore, it will be hugely over-architected, and probably use multiple languages/tools/technologies.

Each component would probably normally be a separate repository, but they are kept in a single repository here for simplicity.

The current plan is something like this:

![architecture](/docs/diagrams/Architecture.png)

## Front end

Nginx acting as a load balancer
Two front-end web sites (currently dotnet core, but will probably change that due to elasticsearch libraries)

## Back end
Elasticsearch as the search index, split into a master and data node

RethinkDB to hold crawl status / site information
Redis to cache downloaded pages
Gearman to manage the job queue

Custom supervisor to control which jobs get added to the queue (fetch, parse, index)
Custom fetcher to get the web pages
Custom parser to extract links to be added back to queue
Custom indexer to add to Elasticsearch

## Future considerations
* Adaptive crawl schedules



