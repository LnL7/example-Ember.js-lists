App = Em.Application.create
	ready: ->
		root = App.RootController.create()
		root.shows.add 'Fringe'
		root.shows.add 'NCIS'

window.App = App


App.RootController = Em.Object.extend
	init: ->
		@_super()
		Em.View.create
			controller: this
			templateName: 'root'
		.appendTo '#main'
		@set 'shows', App.ShowsController.create()


##
# Show

App.ShowsController = Em.ArrayProxy.extend
	content: null
	add: (name) ->
		@pushObject Em.Object.create
			name: name
			init: ->
				@_super()
				@set 'seasons', App.SeasonsController.create()
				@seasons.add '1'
				@seasons.add '2'

	init: ->
		@_super()
		@set 'content', []

App.ShowsView = Em.View.extend
	templateName: 'shows'


##
# Seasons

App.SeasonsController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject Em.Object.create
			number: number
			init: ->
				@_super()
				@set 'eppisodes', App.EppisodesController.create()
				@eppisodes.add '1'

	init: ->
		@_super()
		@set 'content', []

App.SeasonsView = Em.View.extend
	templateName: 'seasons'


##
# Eppisodes

App.EppisodesController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject Em.Object.create
			number: number

	init: ->
		@_super()
		@set 'content', []

App.EppisodesView = Em.View.extend
	templateName: 'eppisodes'
