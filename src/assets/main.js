/* onScroll function to manage menu activation*/
function onScroll(event){
    var scrollPos = $(document).scrollTop() + 80;
    $('#navbarSupportedContent a').each(function () {
        var currLink = $(this);
        var refElement = currLink.attr("href");
        if ($(refElement).position().top <= scrollPos && $(refElement).position().top + $(refElement).height() > scrollPos) {
            $('#navbarSupportedContent .nav-item').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
    if($(this).scrollTop()+200>=$('#contactMe').position().top){
        $('#navbarSupportedContent li').removeClass("active");
        $('#contactMe_li').addClass("active");
    }
}


$(document).ready(function(){
    // manage sendMail bouton to disabled if 
    // form is empty
    $('#sendMail').prop('disabled',true);
    $('.field-txt').keyup(function(){
        var test = false;
        if ( $('#email').val()!="" && $('#object').val()!="" &&  $('#message').val()!="") {
            $('#sendMail').prop('disabled',false);	
        } else {
            $('#sendMail').prop('disabled',true);
        }

    });
    $('#loader-form').hide();

    // call the onScroll function when user scroll on document
    $(document).on("scroll", onScroll);

    // smooth-scrolling with animation
    $('#navbarSupportedContent a').click(function(e) {
        var targetHref = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(targetHref).offset().top
        }, 1500);
        e.preventDefault();
    });

    // toaster options
    toastr.options = {
        "closeButton": false,
        "debug": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "100000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        'body-output-type': 'trustedHtml'
    };

    // send email with ajax function 
    // call the backend api developed with 
    // java spring-boot
    // deployed on heroku cloud
    $("#sendMail").click( function(){
        var obj = {
            email: $("#email").val(),
               suject: $("#object").val(),
            message: $("#message").val()
        }
        $('#loader-form').show();
        $.ajax({
            url: "https://guarded-ocean-39521.herokuapp.com/api/v1/contactMe",
            data: JSON.stringify(obj),
               type: "POST",
            contentType: "application/json",
            dataType: 'json',
            error:function(e){
                console.log(JSON.stringify(e));
                console.log("c brahim");
                toastr.success("Votre message est bien envoyé !");
                $('#loader-form').hide();
            },
            success: function (e) {
                console.log(JSON.stringify(e));
                console.log("c brahim");
                toastr.success("Votre message est bien envoyé !");
                $('#loader-form').hide();
            },
        }); 
        return false;
    });
});