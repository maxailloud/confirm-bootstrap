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
    $.fn.confirmModal = function()
    {
        var confirmLink = this;
        $('body').append('<div id="confirmContainer"></div>');
        var confirmContainer = $('#confirmContainer');

        $(this).on('click', function(modalEvent)
        {
            modalEvent.preventDefault();

            var modal =
            '<div class="modal" id="confirmModal">' +
                '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal">×</button>' +
                    '<h3>#Heading#</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<p>#Body#</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                    '<button class="btn" data-dismiss="modal">Cancel</button>' +
                    '<button class="btn btn-primary" data-dismiss="ok">Yes</button>' +
                '</div>' +
            '</div>'
            ;

            var targetData = $(modalEvent.target).data();

            var defaults = {
                confirmTitle   : 'Please confirm',
                confirmMessage : 'Are you sure you want to perform this action ?'
            };

            var options = $.extend(defaults, targetData);

            modal = modal.replace('#Heading#',options.confirmTitle).replace('#Body#',options.confirmMessage);
            $(confirmContainer).html(modal);

            $(confirmContainer).modal('show');

            $('button[data-dismiss="ok"]',confirmContainer).on('click', function(event) {
                confirmContainer.modal('hide');
                $(location).attr('href',confirmLink.attr('href'));
            });
        });

        return this;
    };
})(jQuery);