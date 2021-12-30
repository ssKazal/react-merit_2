$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('.collapseToggle').on('click', function () {
    $('.sidebar').toggleClass('sidebar--Collapse');
    $('.main').toggleClass('main--slide');
    $('#toggleIcon').toggleClass('rotate');
  });

  /*************************
          Client slider
      *************************/
  $('.client_slider').each(function () {
    var $this = $(this),
      $items = $this.data('items') ? $this.data('items') : 2,
      $loop = $this.data('loop') ? $this.data('loop') : true,
      $navdots = $this.data('nav-dots') ? $this.data('nav-dots') : false,
      $navarrow = $this.data('nav-arrow') ? $this.data('nav-arrow') : true,
      $autoplay = $this.attr('data-autoplay') ? $this.data('autoplay') : false,
      $space = $this.attr('data-space') ? $this.data('space') : 10;

    $(this).owlCarousel({
      loop: $loop,
      items: $items,
      responsive: {
        0: {
          items: $this.data('xx-items') ? $this.data('xx-items') : 1,
        },
        600: {
          items: $this.data('xs-items') ? $this.data('xs-items') : 1,
        },
        767: {
          items: $this.data('sm-items') ? $this.data('sm-items') : 1,
        },
        992: {
          items: $this.data('md-items') ? $this.data('md-items') : 2,
        },
        1190: {
          items: $this.data('lg-items') ? $this.data('lg-items') : 2,
        },
        1200: {
          items: $this.data('lg-items') ? $this.data('lg-items') : 2,
        },
      },
      center: false,
      dots: $navdots,
      margin: $space,
      animateOut: 'fadeOut',
      nav: $navarrow,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplay: $autoplay,
      autoplayHoverPause: true,
    });
  });

  /*************************
          media slider
      *************************/
  $('.media_slider').each(function () {
    var $this = $(this),
      $items = $this.data('items') ? $this.data('items') : 5,
      $loop = $this.data('loop') ? $this.data('loop') : true,
      $navdots = $this.data('nav-dots') ? $this.data('nav-dots') : false,
      $navarrow = $this.data('nav-arrow') ? $this.data('nav-arrow') : true,
      $autoplay = $this.attr('data-autoplay') ? $this.data('autoplay') : false,
      $space = $this.attr('data-space') ? $this.data('space') : 10;

    $(this).owlCarousel({
      loop: $loop,
      items: $items,
      responsive: {
        0: {
          items: $this.data('xx-items') ? $this.data('xx-items') : 2,
        },
        376: {
          items: $this.data('xs-items') ? $this.data('xs-items') : 3,
        },
        600: {
          items: $this.data('xs-items') ? $this.data('xs-items') : 4,
        },
        767: {
          items: $this.data('sm-items') ? $this.data('sm-items') : 4,
        },
        992: {
          items: $this.data('md-items') ? $this.data('md-items') : 4,
        },
        1190: {
          items: $this.data('lg-items') ? $this.data('lg-items') : 5,
        },
        1200: {
          items: $this.data('lg-items') ? $this.data('lg-items') : 5,
        },
      },
      center: false,
      dots: $navdots,
      margin: $space,
      animateOut: 'fadeOut',
      nav: $navarrow,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplay: $autoplay,
      autoplayHoverPause: true,
    });
  });

  /*************************
       setting page
      *************************/

  $('.st_menu li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.st_menu li .secon_menu_set li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  /*************************
       setting right site
      *************************/

  $('#modal_canel_one, #modal_canel_two, #modal_canel_three, #modal_canel_four, #modal_canel_five, #modal_canel_six, #modal_canel_seven, #modal_canel_eight').on('click', function () {
    $('#myModal7, #myModal9, #myModal12, #myModal14, #listmodal2, #listmodal1, #changepass1, #changepasss45, #changepasss95').modal('hide');
  });
});
