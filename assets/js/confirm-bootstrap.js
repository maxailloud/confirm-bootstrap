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
        $('body').append('<div id="confirmContainer"></div>');
        var confirmContainer = $('#confirmContainer');

        $(this).on('click', function(modalEvent)
        {
            modalEvent.preventDefault();

            var confirmLink = $(this);
            var targetData  = confirmLink.data();
            var defaults    = {
                confirmTitle     : 'Please confirm',
                confirmMessage   : 'Are you sure you want to perform this action ?',
                confirmOk        : 'Yes',
                confirmCancel    : 'Cancel',
                confirmDirection : 'rtl'
            };

            var options = $.extend(defaults, opts, targetData);

            var modal =
            '<div class="modal" id="confirmModal">' +
                '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal">×</button>' +
                    '<h3>#Heading#</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<p>#Body#</p>' +
                '</div>' +
                '<div class="modal-footer">'
            ;
            if(options.confirmDirection == 'ltr')
            {
                modal = modal +
                    '<button class="btn btn-primary" data-dismiss="ok">#Ok#</button>' +
                    '<button class="btn" data-dismiss="modal">#Cancel#</button>'
                ;
            }
            else
            {
                modal = modal +
                    '<button class="btn" data-dismiss="modal">#Cancel#</button>' +
                    '<button class="btn btn-primary" data-dismiss="ok">#Ok#</button>'
                ;
            }
            modal = modal +
                '</div>' +
            '</div>'
            ;

            modal = modal.replace('#Heading#',options.confirmTitle).replace('#Body#',options.confirmMessage).replace('#Ok#',options.confirmOk).replace('#Cancel#',options.confirmCancel);
            confirmContainer.html(modal);

            confirmContainer.modal('show');

            $('button[data-dismiss="ok"]', confirmContainer).on('click', function(event) {
                confirmContainer.modal('hide');
                window.location = confirmLink.attr('href');
            });
        });

        return this;
    };
})(jQuery);
