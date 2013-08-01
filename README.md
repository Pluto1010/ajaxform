# AjaxForm

A plugin that ajax-enables forms while supporting some hooks to have control over what has to be done.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/Pluto1010/jquery-ajaxform/master/dist/jquery.ajaxform.min.js
[max]: https://raw.github.com/Pluto1010/jquery-ajaxform/master/dist/jquery.ajaxform.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/ajaxform.min.js"></script>
<script>
$(document).ready(function() {
    $('#somelovelyform').ajaxform({
        before: function(form) {
            // return false to abort posting the form
        },
        done: function(form, data, textStatus, jqXHR) { ... },
        fail: function(form, jqXHR, textStatus, errorThrown) { ... },
        after: function(form) { ... }
    });
});
</script>
```

## Documentation
Let you send your form via a POST request to a server.

You have the following hooks:
* before: will be called before every request made
* done: if the request was sent and a response is received
* fail: if the request could not be sent
* after: will be called after every request made

If you submit the 'lovelyform' you trigger the AJAX sending process.

TIP:
    On before and after you could use jQuery validator for example.
    http://jqueryvalidation.org/documentation

## Release History
_(Nothing yet)_
