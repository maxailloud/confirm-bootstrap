!function ($) {
    $(function(){
        $('[href=#]').click(function (e) {
            e.preventDefault()
        })

        $('.confirModal').confirmModal();

        // make code pretty
        window.prettyPrint && prettyPrint()
    })
}(window.jQuery)