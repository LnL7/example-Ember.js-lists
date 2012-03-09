var App;

App = Em.Application.create({
  ready: function() {
    var root;
    return root = App.RootController.create();
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
    this.set('shows', App.ShowsController.create());
    this.shows.add('Fringe');
    return this.shows.add('NCIS');
  }
});

App.ShowsController = Em.ArrayProxy.extend({
  content: null,
  add: function(name) {
    return this.pushObject(App.ShowModel.create({
      name: name
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.ShowModel = Em.Object.extend({
  name: null,
  init: function() {
    this._super();
    this.set('seasons', App.SeasonsController.create());
    this.seasons.add('1');
    return this.seasons.add('2');
  }
});

App.ShowsView = Em.View.extend({
  templateName: 'shows'
});

App.ShowView = Em.View.extend({
  templateName: 'show'
});

App.SeasonsController = Em.ArrayProxy.extend({
  content: null,
  add: function(number) {
    return this.pushObject(App.SeasonModel.create({
      number: number
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.SeasonModel = Em.Object.extend({
  number: null,
  init: function() {
    this._super();
    this.set('eppisodes', App.EppisodesController.create());
    this.eppisodes.add('1');
    return this.eppisodes.add('2');
  }
});

App.SeasonsView = Em.View.extend({
  templateName: 'seasons'
});

App.SeasonView = Em.View.extend({
  templateName: 'season'
});

App.EppisodesController = Em.ArrayProxy.extend({
  content: null,
  add: function(number) {
    return this.pushObject(App.EppisodeModel.create({
      number: number
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.EppisodeModel = Em.Object.extend({
  number: null,
  init: function() {
    return this._super();
  }
});

App.EppisodesView = Em.View.extend({
  templateName: 'eppisodes'
});

App.EppisodeView = Em.View.extend({
  templateName: 'eppisode'
});
