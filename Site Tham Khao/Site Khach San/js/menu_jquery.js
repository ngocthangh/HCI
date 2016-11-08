$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});


// Login Form
$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

//Sign up
$(function() {
	$("#signupButton").click(function(){
		$(".signup").css('display','block');
		$(".signin").css('display','none');
		$("#signinButton").css('background','#ededed');
		$("#signupButton").css('background','#6fd508');
	});
	$("#signinButton").click(function(){
		$(".signin").css('display','block');
		$(".signup").css('display','none');
		$("#signupButton").css('background','#ededed');
		$("#signinButton").css('background','#6fd508');
	});
});


// site Lien He
$(function() {
	$(".item-menu-row1").click(function(){
		$(".item-menu-row1").css({'color':'#6fd508','font-weight':'bold','border-right':'solid 1px #6fd508'});
		$(".item-menu-row2,.item-menu-row3,.item-menu-row4").css({'color':'#333','font-weight':'normal','border-right':'0px'});
		$(".type-menu-col1").css("display","block");
		$(".type-menu-col2,.type-menu-col3,.type-menu-col4").css("display","none");
		
		$(".p1").css("display","block");
		$(".p2,.p3,.p4").css("display","none");
		
	});
	$(".item-menu-row2").click(function(){
		$(".item-menu-row2").css({'color':'#6fd508','font-weight':'bold','border-right':'solid 1px #6fd508'});
		$(".item-menu-row1,.item-menu-row3,.item-menu-row4").css({'color':'#333','font-weight':'normal','border-right':'0px'});
		$(".type-menu-col2").css("display","block");
		$(".type-menu-col1,.type-menu-col3,.type-menu-col4").css("display","none");
		
		$(".p2").css("display","block");
		$(".p1,.p3,.p4").css("display","none");
	});
	$(".item-menu-row3").click(function(){
		$(".item-menu-row3").css({'color':'#6fd508','font-weight':'bold','border-right':'solid 1px #6fd508'});
		$(".item-menu-row2,.item-menu-row1,.item-menu-row4").css({'color':'#333','font-weight':'normal','border-right':'0px'});
		$(".type-menu-col3").css("display","block");
		$(".type-menu-col2,.type-menu-col1,.type-menu-col4").css("display","none");
		
		$(".p3").css("display","block");
		$(".p1,.p2,.p4").css("display","none");
	});
	$(".item-menu-row4").click(function(){
		$(".item-menu-row4").css({'color':'#6fd508','font-weight':'bold','border-right':'solid 1px #6fd508'});
		$(".item-menu-row2,.item-menu-row3,.item-menu-row1").css({'color':'#333','font-weight':'normal','border-right':'0px'});
		$(".type-menu-col4").css("display","block");
		$(".type-menu-col2,.type-menu-col3,.type-menu-col1").css("display","none");
		$(".p4").css("display","block");
		$(".p1,.p2,.p3").css("display","none");
	});
});