App = Em.Application.create
	ready: ->
		root = App.RootController.create()

window.App = App


App.RootController = Em.Object.extend
	init: ->
		@_super()
		Em.View.create
			controller: this
			templateName: 'root'
		.appendTo '#main'
		@set 'shows', App.ShowsController.create()
		@shows.add 'Fringe'
		@shows.add 'NCIS'


##
# Show

App.ShowsController = Em.ArrayProxy.extend
	content: null
	add: (name) ->
		@pushObject App.ShowModel.create
			name: name

	init: ->
		@_super()
		@set 'content', []

App.ShowModel = Em.Object.extend
	name: null
	init: ->
		@_super()
		@set 'seasons', App.SeasonsController.create()
		@seasons.add '1'
		@seasons.add '2'

App.ShowsView = Em.View.extend
	templateName: 'shows'

App.ShowView = Em.View.extend
	templateName: 'show'


##
# Season

App.SeasonsController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject App.SeasonModel.create
			number: number

	init: ->
		@_super()
		@set 'content', []

App.SeasonModel = Em.Object.extend
	number: null
	init: ->
		@_super()
		@set 'eppisodes', App.EppisodesController.create()
		@eppisodes.add '1'
		@eppisodes.add '2'

App.SeasonsView = Em.View.extend
	templateName: 'seasons'

App.SeasonView = Em.View.extend
	templateName: 'season'


##
# Eppisode

App.EppisodesController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject App.EppisodeModel.create
			number: number

	init: ->
		@_super()
		@set 'content', []

App.EppisodeModel = Em.Object.extend
	number: null
	init: ->
		@_super()

App.EppisodesView = Em.View.extend
	templateName: 'eppisodes'

App.EppisodeView = Em.View.extend
	templateName: 'eppisode'
