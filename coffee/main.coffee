App = Em.Application.create
	ready: ->
		root = App.RootController.create()
		root.shows.add 'Fringe'

window.App = App


App.RootController = Em.Object.extend
	init: ->
		@_super()
		Em.View.create
			controller: this
			templateName: 'root'
		.appendTo '#main'
		@set 'shows', App.ShowController.create()

App.ShowController = Em.ArrayProxy.extend
	content: null
	add: (name) ->
		@pushObject Em.Object.create
			name: name

	init: ->
		@_super()
		@set 'content', []

App.ShowView = Em.View.extend
	templateName: 'show'
