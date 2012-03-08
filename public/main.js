var App;

App = Em.Application.create({
  ready: function() {
    return App.MainView.create().appendTo('#main');
  }
});

window.App = App;

App.MainView = Em.View.extend({
  templateName: 'main',
  title: 'Main View'
});

App.ShowsView = Em.View.extend({
  templateName: 'shows',
  title: 'Shows',
  init: function() {
    this.shows = App.Shows.create();
    this.shows.add('Fringe');
    return this._super();
  }
});

App.ShowView = Em.View.extend({
  templateName: 'show'
});

App.Shows = Em.ArrayProxy.extend({
  content: [],
  add: function(name) {
    return this.pushObject(App.Show.create({
      name: name
    }));
  }
});

App.Show = Em.Object.extend({
  name: null
});
