var App;

App = Em.Application.create({
  ready: function() {
    var root;
    root = App.RootController.create();
    root.shows.add('Fringe');
    return root.shows.add('NCIS');
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
    return this.set('shows', App.ShowsController.create());
  }
});

App.ShowsController = Em.ArrayProxy.extend({
  content: null,
  add: function(name) {
    return this.pushObject(Em.Object.create({
      name: name,
      init: function() {
        this._super();
        this.set('seasons', App.SeasonsController.create());
        this.seasons.add('1');
        return this.seasons.add('2');
      }
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.ShowsView = Em.View.extend({
  templateName: 'shows'
});

App.SeasonsController = Em.ArrayProxy.extend({
  content: null,
  add: function(number) {
    return this.pushObject(Em.Object.create({
      number: number,
      init: function() {
        this._super();
        this.set('eppisodes', App.EppisodesController.create());
        return this.eppisodes.add('1');
      }
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.SeasonsView = Em.View.extend({
  templateName: 'seasons'
});

App.EppisodesController = Em.ArrayProxy.extend({
  content: null,
  add: function(number) {
    return this.pushObject(Em.Object.create({
      number: number
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.EppisodesView = Em.View.extend({
  templateName: 'eppisodes'
});
