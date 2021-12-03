
$(document).ready(function(){

  $('.close_conteiner').removeClass('inact').addClass('act')
  $('.promotion_case').removeClass('active').addClass('inactive')

  function promo_big(){
    $('.conteiner_big_prommo').css({
      'opacity' : '1',
      'z-index' : '100'
    })
    $('.promotion_case').removeClass('active').addClass('inactive')
  }

  // if ($('#home_page_promo_act').hasClass('home_active_promo')) {
  //
  // }

    $('.close_conteiner').click(function(){
      $('.close_conteiner').toggleClass('act inact')

      if ($('.close_conteiner').hasClass('inact')) {
        $('.conteiner_big_prommo').css({
          'opacity' : '0',
          'z-index' : '-100'
        })
        $('.close_conteiner').removeClass('inact').addClass('act')
      }
    })


    var wHeight = window.innerHeight
    var wWidth = window.innerWidth

    function imgSize(size){
        var imgPromoHeight = size - ((size * 15) / 100)
        $('#big_promo_photo').css({
          'height' : imgPromoHeight,
          'width' : 'auto'
        })
    }

    $('.promotion_case').click(function(){
      $('.promotion_case').toggleClass('active inactive')

      if ($('.promotion_case').hasClass('active')) {
        promo_big()
        if (wWidth > wHeight) {
          imgSize(wHeight)
        } else {
          imgSize(wWidth)
        }
      }
    })

})
