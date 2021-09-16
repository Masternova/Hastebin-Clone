rename sample.env to .env and variables as needed
In this directory, run this

> docker build --tag="hastebin:1.0.0" .
> docker run -d -p 3232:3000 --name hastebin hastebin:1.0.0