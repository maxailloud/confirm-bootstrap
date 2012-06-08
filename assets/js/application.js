!function ($) {

    $(function(){

        $('[href=#]').click(function (e) {
            e.preventDefault()
        })

        $('.confirModal').confirmModal();

        $("#openConfirmModal").click(function () {
            $("#confirmDiv").confirmModal({
                heading: 'Confirm to delete',
                body: 'Are you sure you want to delete this record?',
                callback: function () {
                    alert('callback test');
                }
            })
        });


        // make code pretty
        window.prettyPrint && prettyPrint()

    })

}(window.jQuery)