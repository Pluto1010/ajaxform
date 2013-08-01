/*! ajaxform - v0.0.1 - 2013-08-01
* https://github.com/Pluto1010/ajaxform
* Copyright (c) 2013 Dennis Schulz; Licensed MIT */
(function ( $ ) {
    $.fn.ajaxform = function(o) {
        var form = this;

        function postDone(data, textStatus, jqXHR) {
            if(typeof o.done === 'function') {
                o.done(form, data, textStatus, jqXHR);
            }
        }

        function postFail(jqXHR, textStatus, errorThrown) {
            if(typeof o.fail === 'function') {
                o.fail(form, jqXHR, textStatus, errorThrown);
            }
        }

        function postAfter() {
            if(typeof o.after === 'function') {
                o.after(form);
            }
        }

        function submit() {
            event.preventDefault();

            if(typeof o.before === 'function') {
                var result = o.before(form);
                if(result === false) {
                    return false;
                }
            }

            $.post(form.data('ajaxform'), form.serialize())
            .done(postDone)
            .fail(postFail)
            .always(postAfter);
        }

        this.on('submit', submit);
        return this;
    };
}( jQuery ));
