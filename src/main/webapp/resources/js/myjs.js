function getCsrf(){
    return jQuery('[name=_csrf]').val();
}
$(function(){

    $(".dropdown-menu li a").click(function(){
        //alert($(this).text());
        $("#name").val($(this).text());
    });
});

$( document ).ready(function() {
    $('.color_type').on('change', function() {
        //alert( $(this).val() +  $(this).attr("description_id") ); // or $(this).val()
        $.ajax({
            type : "POST",
            url : "/getData",
            data : {
                test : "test",
                _csrf : getCsrf()
            },
            success : function(data) {
                alert("data");
                location.reload();
            }
        });

    });
    $(".individual_account_names").on('change', function() {
        window.location.href = "/individualAccountDetails/"+$( ".individual_account_names" ).val();
    });
    $( ".id_action" ).click(function() {
        var r = confirm("Do You Really want to delete??    >>    "+ $(this).html());
        if (r === true)
        {
            $.ajax({
                type : "POST",
                url : "/deleteAccountDetails",
                data : {
                    accountDetailsId : $(this).html(),
                    _csrf : getCsrf()
                },
                success : function(data) {
                    if(data){
                        alert("Delete Successful");
                        location.reload();
                    }else{
                        alert("Try Again");
                    }
                }
            });
        }
    });
    $( ".id_stock_action" ).click(function() {
        var r = confirm("Do You Really want to delete??    >>    "+ $(this).html());
        if (r === true)
        {
            $.ajax({
                type : "POST",
                url : "/deleteStockDetails",
                data : {
                    stockDetailsId : $(this).html(),
                    _csrf : getCsrf()
                },
                success : function(data) {
                    if(data){
                        alert("Delete Successful");
                        location.reload();
                    }else{
                        alert("Try Again");
                    }
                }
            });
        }
    });
});

