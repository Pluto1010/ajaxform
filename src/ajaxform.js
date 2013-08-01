/*
 * ajaxform
 *
 *
 * Copyright (c) 2013 Dennis Schulz
 * Licensed under the MIT license.
 */


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
