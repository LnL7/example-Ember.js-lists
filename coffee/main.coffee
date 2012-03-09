App = Em.Application.create
	ready: ->
		window.root = App.RootController.create()

window.App = App


##
# Root

App.RootController = Em.Object.extend
	title: 'Root Controller'
	init: ->
		Em.View.create
			controller: this
			templateName: 'root'
		.appendTo '#main'

		@set 'shows', App.ShowsController.create()
		@_super()


##
# Shows

App.ShowsController = Em.ArrayProxy.extend
	title: 'Shows Controller'
	content: []
	add: (id, name) ->
		@pushObject Em.Object.create
			id: id
			name: name

	init: ->
		@add 1, 'Fringe'
		@add 2, 'Game of Thrones'
		@_super()

App.ShowsView = Em.View.extend
	templateName: 'shows'
