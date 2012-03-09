var App;

App = Em.Application.create({
  ready: function() {
    return window.root = App.RootController.create();
  }
});

window.App = App;

App.RootController = Em.Object.extend({
  title: 'Root Controller',
  init: function() {
    Em.View.create({
      controller: this,
      templateName: 'root'
    }).appendTo('#main');
    this.set('shows', App.ShowsController.create());
    return this._super();
  }
});

App.ShowsController = Em.ArrayProxy.extend({
  title: 'Shows Controller',
  content: [],
  add: function(name) {
    return this.pushObject(Em.Object.create({
      name: name
    }));
  },
  init: function() {
    this.add('Fringe');
    this.add('Game of Thrones');
    return this._super();
  }
});

App.ShowsView = Em.View.extend({
  templateName: 'shows'
});
