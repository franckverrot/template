define('template', function(template) {
  var template = {
    load: function (resourceName, parentRequire, callback, config) {
      var extension = '.html';

      return parentRequire(
        [("text!" + resourceName + extension)],
        function (templateContent) {
          var templateName = resourceName;
          Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(templateContent);
          callback(templateName);
        }
      );
    }
  }

  return template;
});
