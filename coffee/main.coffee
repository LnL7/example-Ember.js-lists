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
		@set 'shows', App.ShowController.create()


##
# Show

App.ShowController = Em.ArrayProxy.extend
	content: null
	add: (name) ->
		@pushObject Em.Object.create
			name: name
			init: ->
				@_super()
				@set 'seasons', App.SeasonController.create()
				@seasons.add '1'
				@seasons.add '2'

	init: ->
		@_super()
		@set 'content', []

App.ShowView = Em.View.extend
	templateName: 'show'


##
# Season

App.SeasonController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject Em.Object.create
			number: number
			init: ->
				@_super()
				@set 'eppisodes', App.EppisodeController.create()
				@eppisodes.add '1'

	init: ->
		@_super()
		@set 'content', []

App.SeasonView = Em.View.extend
	templateName: 'season'


##
# Eppisode

App.EppisodeController = Em.ArrayProxy.extend
	content: null
	add: (number) ->
		@pushObject Em.Object.create
			number: number

	init: ->
		@_super()
		@set 'content', []

App.EppisodeView = Em.View.extend
	templateName: 'eppisode'
