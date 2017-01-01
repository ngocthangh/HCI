if (typeof Chudu24 == "undefined")
  var Chudu24 = {};
if (typeof Chudu24.Home == "undefined")
  Chudu24.Home = {};

Chudu24.Home = {
  Init: function () {
    var thisObj = Chudu24.Home;
    thisObj.Events();
    thisObj.ShowFacebookBar();
    //thisObj.FillMinRate();
    thisObj.royalSliders();
    Chudu24.Master.getCsrfToken();
  },
  Events: function () {

// menu Feature Campaigns
    $(document).on({
      mouseenter: function (e) {
//stuff to do on mouse enter
        e.preventDefault();
        var _this = $(this).find("a");
        var newcontent = _this.data('href');
        if (!_this.hasClass('active')) {
          $('.featuredCampaigns ul.nav-featured li').removeClass('active');
          $('.featuredCampaigns ul.nav-featured li a.active').removeClass('active');
          $(".featuredCampaigns .nav-featured li a").css({ 'border-bottom-color': '#777' });
          _this.addClass('active');
          _this.css({ 'border-bottom-color': '#86b817' });
          if ($(this).prev()) {
            $("a", $(this).prev()).css({ 'border-bottom-color': '#fff' });
          };
          $(this).addClass('active');
        }
        if (!$(newcontent).hasClass('displayed')) {
          $('.sub-featured.displayed').removeClass('displayed');
          $(newcontent).addClass('displayed');
        }
      },
      mouseleave: function (e) {
//stuff to do on mouse leave
        e.preventDefault();
//$('.featuredCampaigns ul.nav-featured li a').removeClass('active');
      }
    }, ".featuredCampaigns ul.nav-featured li"); //pass the element as an argument to .on

//if ($("#header .bottom-header ul.nav-pills li.active").length == 0) {
//$("#header .bottom-header ul.nav-pills li:first").addClass("active");
//};

// menu #header .bottom-header
    $(document).on({
      mouseenter: function (e) {
//stuff to do on mouse enter
        e.preventDefault();
        $("#header .bottom-header ul.nav-pills li.active").removeClass("active").addClass("hover");
      },
      mouseleave: function (e) {
//stuff to do on mouse leave
        e.preventDefault();
      }
    }, "#header .bottom-header ul.nav-pills li"); //pass the element as an argument to .on

// menu #header .bottom-header
    $(document).on({
      mouseenter: function (e) {
//stuff to do on mouse enter
        e.preventDefault();
      },
      mouseleave: function (e) {
//stuff to do on mouse leave
        e.preventDefault();
        $("#header .bottom-header ul.nav-pills li.hover").removeClass("hover").addClass("active");
      }
    }, "#header .bottom-header ul.nav-pills"); //pass the element as an argument to .on

    function fulltext_search(search_field, search_input) {
      var non_unicode = remove_unicode(search_field); // search không dấu
      return (non_unicode.indexOf(search_input) != -1 || search_field.indexOf(search_input) != -1);
    }

    function remove_unicode(str) {
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      return str;
    }

    $(document).ready(function () {
      $("img.lazy").lazy({
        effect: "fadeIn",
        effectTime: 1000
      });
    });
  },
  ShowFacebookBar: function () {
    var $share_popout = $('#topbar_facebook_like');
    $(window).on('scroll', function () {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        if (parseInt($share_popout.offset().top) != 0) {
          $.LoadAsyncFacabook();
          $share_popout.css({ 'top': '0px', 'transition-duration': '0.5s' });
        }
      }
      else {
        if (parseInt($share_popout.offset().top) != -150) {
          $share_popout.css({ 'top': '-150px', 'transition-duration': '0.5s' });
        }
      }
    });
  },
  FillMinRate: function () {
    var ajaxCall = null;
    var _url = "https://www.chudu24.com/V2/Home/WebServices/HomePage.asmx/GetMinRatesChouponPromotion";
    if (ajaxCall != null) ajaxCall.abort();
    ajaxCall = $.ajax({
      type: "POST",
      url: _url,
      data: {},
      cache: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (msg) {
        $.each(msg.d, function (k, v) {
          BindData(v)
        })
      },
      error: function () {
        Chudu24.Notification.Message("error", "Lỗi hệ thống.", "Lỗi hệ thống");
      }
    });
    function BindData(rate) {
      $('.' + rate.TypeId + '[ItemIdInt="' + rate.ItemIdInt + '"]').find('.MinRateVnd').html(function () {
        return rate.MinRateVND;
      });
    }
  },
  royalSliders: function () {
    var royalSliders = $('.royalSlider');
    royalSliders.each(function () {
      var _this = $(this);
      var arrows = _this.data('arrows') ? true : false;
      var auto = _this.data('auto') ? true : false;
      var delay = _this.data('delay') ? _this.data('delay') : 4000;
      var width = _this.data('w');
      var height = _this.data('h');
      _this.royalSlider({
        arrowsNav: arrows,
        arrowsNavAutoHide: true,
        controlNavEnabled: false,
        fadeinLoadedSlide: true,
        imageScaleMode: "fill",
        imageAlignCenter: true,
        autoScaleSlider: true,
        autoScaleSliderWidth: width,
        autoScaleSliderHeight: height,
        blockLoop: true,
        loop: true,
        loopRewind: true,
        numImagesToPreload: 0,
        transitionType: "move",
        keyboardNavEnabled: true,
        navigateByClick: false,
        block: {
          delay: 400,
          fadeEffect: false,
          moveEffect: "left"
        },
        autoPlay: {
          enabled: auto,
          stopAtAction: false,
          pauseOnHover: false,
          delay: delay
        }
      });
      var slider = _this.data('royalSlider');
      slider.ev.on('rsBeforeAnimStart', function () {
        var rsSlide = $("div.rsSlide");
        if (rsSlide.length > 0) {
          var rsContent = $(".rsContent", rsSlide);
          $("img.lazy[src$='spacer.gif']", rsContent).each(function (i) {
            var src = $(this).attr("data-src");
            $(this).fadeOut(100, function () {
              $(this).attr("src", src);
              $(this).fadeIn(250);
            });
          });
        }
      });
      var dragType = null;
      _this.draggable({
        axis: "x"
        ,
        start: function (event, ui) {
        },
        drag: function (event, ui) {
          if (ui.originalPosition.left != ui.position.left) {
            dragType = ui.originalPosition.left > ui.position.left;
            ui.position.left = ui.originalPosition.left;
          }
        },
        stop: function (event, ui) {
          if (dragType != null) {
            if (dragType) {
              _this.data('royalSlider').next()
            }
            else {
              _this.data('royalSlider').prev()
            }
          }
        }
      });
    });
  }

};

$(function () {
  var thisObj = Chudu24.Home;
  thisObj.Init();
});



