App = Em.Application.create
	ready: ->
		App.MainView.create().appendTo '#main'

window.App = App


App.MainView = Em.View.extend
	templateName: 'main'
	title: 'Main View'

App.ShowsView = Em.View.extend
	templateName: 'shows'
	title: 'Shows'
	init: ->
		@shows = App.Shows.create()
		@shows.add 'Fringe'
		@_super()

App.ShowView = Em.View.extend
	templateName: 'show'

App.Shows = Em.ArrayProxy.extend
	content: []
	add: (name) ->
		@pushObject App.Show.create
			name: name

App.Show = Em.Object.extend
	name: null
