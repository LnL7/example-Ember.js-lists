express = require 'express'



app = express.createServer()
app.use express.static __dirname + '/public'
app.get '/favicon.ico', (req, res) ->
	res.send ''

app.get '/json/person/1', (req, res) ->
	res.send '{"person": {"name": "One"}}'

app.listen 5000
