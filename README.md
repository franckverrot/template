# template

A RequireJS plugin that compile Handlebars templates of EmberJS applications that use AMD.

## Usage

EmberJS applications that use RequireJS won't be able to specify `templateName`s inside
their views like so:

```javascript
Ember.View.extend({
  templateName: 'foo'
})
```
as the template can't be automatically found and compiled at boot time.

Most applications will have views that look like this:

```javascript
define('my_view',
       ['text!app/templates/my_template'],
       function(myTemplateContent) {
         Ember.View.extend({
           template: Ember.Handlebars.compile(myTemplateContent);
         })
       });
```

This plugin makes things a little easier and automatically compile Handlebars
templates and make them available for your EmberJS application:

```javascript
define('my_view',
       ['template!app/templates/my_template'],
       function(myTemplateName) {
         Ember.View.extend({
           templateName: myTemplateName
         })
       });
```

Notice there's no extension at the end of the template name.

This will be configurable in the future, but the library assumes the templates'
extensions are '.handlebars'.

## Configuration

N/A

## License

MIT License
