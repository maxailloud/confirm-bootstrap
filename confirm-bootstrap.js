/* ===================================================
 * confirmModal by Maxime AILLOUD
 * https://github.com/mailloud/confirm-bootstrap
 * ===================================================
 *            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENCE
 *                    Version 2, December 2004
 *
 * Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
 *
 * Everyone is permitted to copy and distribute verbatim or modified
 * copies of this licence document, and changing it is allowed as long
 * as the name is changed.
 *
 *            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENCE
 *   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *  0. You just DO WHAT THE FUCK YOU WANT TO.
 * ========================================================== */


 (function($) {
    $.fn.confirmModal = function(opts)
    {
        var body = $('body');
        var defaultOptions    = {
            confirmTitle     : 'Please confirm',
            confirmMessage   : 'Are you sure you want to perform this action ?',
            confirmOk        : 'Yes',
            confirmCancel    : 'Cancel',
            confirmDirection : 'rtl',
            confirmStyle     : 'primary',
            confirmCallback  : defaultCallback,
            confirmDismiss   : true,
            confirmAutoOpen  : false
        };

        var headModalTemplate =
            '<div class="modal fade" id="#modalId#" tabindex="-1" role="dialog" aria-labelledby="#AriaLabel#" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                        '<div class="modal-header">' +
                            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                            '<h4 id="#AriaLabel#" class="modal-title">#Heading#</h4>' +
                        '</div>' +
                        '<div class="modal-body">' +
                            '<p>#Body#</p>' +
                        '</div>' +
                        '<div class="modal-footer">' +
                        '#buttonTemplate#' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
            ;

        return this.each(function()
        {
            var options = $.extend({}, defaultOptions, opts);

            var confirmLink = $(this);
            var targetData  = confirmLink.data();

            $.extend(options, targetData);

            var modalId = "confirmModal" + Math.floor(Math.random()*(1e+9));
            var modalTemplate = headModalTemplate;
            var buttonTemplate =
                '<button class="btn btn-default" data-dismiss="modal">#Cancel#</button>' +
                '<button class="btn btn-#Style#" data-dismiss="ok">#Ok#</button>'
            ;

            if(options.confirmDirection == 'ltr')
            {
                buttonTemplate =
                    '<button class="btn btn-#Style#" data-dismiss="ok">#Ok#</button>' +
                    '<button class="btn btn-default" data-dismiss="modal">#Cancel#</button>'
                ;
            }

            var confirmTitle = options.confirmTitle;
            if(typeof options.confirmTitle == 'function')
            {
                confirmTitle = options.confirmTitle.call(this);
            }

            var confirmMessage = options.confirmMessage;
            if(typeof options.confirmMessage == 'function')
            {
                confirmMessage = options.confirmMessage.call(this);
            }

            modalTemplate = modalTemplate.
                replace('#buttonTemplate#', buttonTemplate).
                replace('#modalId#', modalId).
                replace('#AriaLabel#', confirmTitle).
                replace('#Heading#', confirmTitle).
                replace('#Body#', confirmMessage).
                replace('#Ok#', options.confirmOk).
                replace('#Cancel#', options.confirmCancel).
                replace('#Style#', options.confirmStyle)
            ;

            body.append(modalTemplate);

            var confirmModal = $('#' + modalId);

            confirmLink.on('click', function(modalEvent)
            {
                modalEvent.preventDefault();
                confirmModal.modal('show');
            });

            $('button[data-dismiss="ok"]', confirmModal).on('click', function(event) {
                if (options.confirmDismiss) {
                    confirmModal.modal('hide');
                }
                options.confirmCallback(confirmLink, confirmModal);
            });

            if (options.confirmAutoOpen) {
                confirmModal.modal('show');
            }
        });

        function defaultCallback(target, modal)
        {
            window.location = $(target).attr('href');
        }
    };
})(jQuery);
