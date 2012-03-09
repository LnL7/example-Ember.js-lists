var App;

App = Em.Application.create({
  ready: function() {
    var root;
    root = App.RootController.create();
    return root.shows.add('Fringe');
  }
});

window.App = App;

App.RootController = Em.Object.extend({
  init: function() {
    this._super();
    Em.View.create({
      controller: this,
      templateName: 'root'
    }).appendTo('#main');
    return this.set('shows', App.ShowController.create());
  }
});

App.ShowController = Em.ArrayProxy.extend({
  content: null,
  add: function(name) {
    return this.pushObject(Em.Object.create({
      name: name
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.ShowView = Em.View.extend({
  templateName: 'show'
});
