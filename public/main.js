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
    return this.set('shows', App.ShowController.create());
  }
});

App.ShowController = Em.ArrayProxy.extend({
  content: null,
  add: function(name) {
    return this.pushObject(Em.Object.create({
      name: name,
      init: function() {
        this._super();
        this.set('seasons', App.SeasonController.create());
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

App.ShowView = Em.View.extend({
  templateName: 'show'
});

App.SeasonController = Em.ArrayProxy.extend({
  content: null,
  add: function(number) {
    return this.pushObject(Em.Object.create({
      number: number,
      init: function() {
        this._super();
        this.set('eppisodes', App.EppisodeController.create());
        return this.eppisodes.add('1');
      }
    }));
  },
  init: function() {
    this._super();
    return this.set('content', []);
  }
});

App.SeasonView = Em.View.extend({
  templateName: 'season'
});

App.EppisodeController = Em.ArrayProxy.extend({
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

App.EppisodeView = Em.View.extend({
  templateName: 'eppisode'
});
