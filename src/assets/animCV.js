$(document).ready(function(){


	$(window).scroll(function(){
		if($(document).scrollTop()>50){
			$("nav").addClass("shrink")
		}
		else{
			$("nav").removeClass("shrink")
		}
	});

function animateElements() {
    $('.cirleprogressbar').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          size: 160,
          thickness: 2,
          fill: {
            color: '#b39ddb'
          }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);


    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;


  $(window).scroll( function(){
    var $developmentWrapper = $('.development-wrapper');
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if ($developmentWrapper !== null && $developmentWrapper !== undefined) {
      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
    }

  });






});



jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

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
                toastr.success("Votre message est bien envoyé !");
                $('#loader-form').hide();
            },
            success: function (e) {
                console.log(JSON.stringify(e));
                toastr.success("Votre message est bien envoyé !");
                $('#loader-form').hide();
            },
        });
        return false;
    });
});



