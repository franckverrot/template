define(['module'], function(module) {

  var masterConfig = module.config();

  var hbs = {
    load: function(name, req, load, config) {
      config = config || {};
      var extension = masterConfig.extension;
      if (config.extension) {
        extension = config.extension;
      }
      extension = extension || 'handlebars';
      var textName = 'text!' + name + '.' + extension;

      return req(['ember', textName], function (Ember, template) {
          var templateName = name;
          Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(template);
          load(templateName);
        }
      );
    }
  }

  return hbs;
});
